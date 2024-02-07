#!/bin/bash

if [ -z "$GITHUB_ACCESS_TOKEN" ]; then
    echo "Error: GITHUB_ACCESS_TOKEN environment variable is not set."
    exit 1
fi

if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
    echo "Error: CLOUDFLARE_API_TOKEN environment variable is not set."
    exit 1
fi

if [ -z "$CLOUDFLARE_ZONE_ID" ]; then
    echo "Error: CLOUDFLARE_ZONE_ID environment variable is not set."
    exit 1
fi

STACK_NAME="amc-carpool-fe-stack"

if [ "$1" == "up" ]; then
  aws cloudformation create-stack \
    --stack-name "$STACK_NAME" \
    --template-body file://aws-cloudformation-template.json \
    --parameters ParameterKey=GitHubAccessToken,ParameterValue=$GITHUB_ACCESS_TOKEN

  aws cloudformation wait stack-create-complete --stack-name "$STACK_NAME"

  AMPLIFY_APP_ID=$(aws amplify list-apps | jq -r '.apps[] | select(.name == "amc-carpool-fe") | .appId')

  JOB_ID=$(aws amplify start-job --app-id "$AMPLIFY_APP_ID" --branch-name main --job-type RELEASE --query 'jobSummary.jobId' --output text)

  while true; do
    JOB_STATUS=$(aws amplify get-job --app-id "$AMPLIFY_APP_ID" --branch-name main --job-id "$JOB_ID" --query 'job.summary.status' --output text)
    if [ "$JOB_STATUS" == "SUCCEED" ]; then
      break
    fi
    sleep 10
  done

  aws amplify create-domain-association --app-id "$AMPLIFY_APP_ID" --domain-name "zbly.org" --sub-domain-settings prefix=amc-carpool,branchName=main

  while true; do
    DOMAIN_STATUS=$(aws amplify get-domain-association --app-id "$AMPLIFY_APP_ID" --domain-name "zbly.org"  --query 'domainAssociation.domainStatus' --output text)
    if [ "$DOMAIN_STATUS" == "AWAITING_APP_CNAME" ]; then
      break
    fi
    sleep 10
  done

  CNAME_RECORD_CONTENT=$(aws amplify get-domain-association --app-id "$AMPLIFY_APP_ID" --domain-name "zbly.org" --query 'domainAssociation.subDomains[0].dnsRecord' --output text | sed 's/"//g' | awk '{print $NF}')

  curl -X POST "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/dns_records" \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -H Content-Type:application/json \
    --data "{
        \"content\": \"$CNAME_RECORD_CONTENT\",
        \"name\": \"amc-carpool\",
        \"proxied\": false,
        \"type\": \"CNAME\",
        \"comment\": \"Points to the AMC Carpool FE Amplify App\",
        \"ttl\": 60
      }"

elif [ "$1" == "down" ]; then
  AMPLIFY_APP_ID=$(aws amplify list-apps --query "apps[?name=='amc-carpool-fe'].appId" --output text)

  aws amplify delete-domain-association --app-id "$AMPLIFY_APP_ID" --domain-name zbly.org

  aws cloudformation delete-stack --stack-name "$STACK_NAME"

  aws cloudformation wait stack-delete-complete --stack-name "$STACK_NAME"

  WEBHOOK_ID=$(curl -s -H "Authorization: token $GITHUB_ACCESS_TOKEN" \
    "https://api.github.com/repos/kjohnson0451/amc-carpool-fe/hooks" | \
    jq -r '.[] | select(.config.url | contains("'"$AMPLIFY_APP_ID"'")) | .id')

    curl -X DELETE -H "Authorization: token $GITHUB_ACCESS_TOKEN" \
      "https://api.github.com/repos/kjohnson0451/amc-carpool-fe/hooks/$WEBHOOK_ID"

  RESPONSE=$(curl -sS -X GET "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/dns_records?type=CNAME&name=amc-carpool.zbly.org" \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -H Content-Type:application/json)

  RECORD_ID=$(echo "$RESPONSE" | jq -r '.result[0].id')

  curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/dns_records/$RECORD_ID" \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -H Content-Type:application/json

  DEPLOY_KEY_ID=$(curl -sS -X GET "https://api.github.com/repos/kjohnson0451/amc-carpool-fe/keys" \
    -H "Authorization: token $GITHUB_ACCESS_TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    | jq '.[] | select(.title | endswith("amplify@aws")) | .id')

  curl -X DELETE "https://api.github.com/repos/kjohnson0451/amc-carpool-fe/keys/$DEPLOY_KEY_ID" \
  -H "Authorization: token $GITHUB_ACCESS_TOKEN" \
  -H "Accept: application/vnd.github.v3+json"

else
    echo "Usage: $0 [up|down]"
    exit 1

fi

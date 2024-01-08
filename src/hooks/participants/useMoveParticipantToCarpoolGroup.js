import { useParams } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { moveParticipantToCarpoolGroup } from "@services/participants/api"
import QUERY_KEYS from "@config/queryKeys"

const useMoveParticipantToCarpoolGroup = () => {
  const { tripId } = useParams()
  const queryClient = useQueryClient()
  const queryKey = [QUERY_KEYS.TRIPS, QUERY_KEYS.TRIP_DETAILS, tripId]
  return useMutation({
    mutationFn: moveParticipantToCarpoolGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
    },
  })
}

export default useMoveParticipantToCarpoolGroup

import { useQuery } from "@tanstack/react-query"
import { getTrips } from "@services/trips/api"
import QUERY_KEYS from "@config/queryKeys"

const useTrips = () => {
  const queryKey = [QUERY_KEYS.TRIPS]
  return useQuery({ queryKey, queryFn: getTrips })
}

export default useTrips

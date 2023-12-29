import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getTrip } from "@services/trips/api"
import QUERY_KEYS from "@config/queryKeys"

const useTrip = () => {
  const { tripId } = useParams()
  const queryKey = [QUERY_KEYS.TRIPS, QUERY_KEYS.TRIP_DETAILS, tripId]
  return useQuery({ queryKey, queryFn: () => getTrip(tripId) })
}

export default useTrip

import { useParams } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateTrip } from "@services/trips/api"
import QUERY_KEYS from "@config/queryKeys"

const useUpdateTrip = () => {
  const { tripId } = useParams()
  const queryClient = useQueryClient()
  const queryKey = [QUERY_KEYS.TRIPS, QUERY_KEYS.TRIP_DETAILS, tripId]
  return useMutation({
    mutationFn: updateTrip,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
    },
  })
}

export default useUpdateTrip

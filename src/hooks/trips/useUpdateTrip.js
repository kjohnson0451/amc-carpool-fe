import { useParams } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateTrip } from "@services/trips/api"
import QUERY_KEYS from "@config/queryKeys"
import toast from "react-hot-toast"

const useUpdateTrip = ({ onSuccess }) => {
  const { tripId } = useParams()
  const queryClient = useQueryClient()
  const queryKey = [QUERY_KEYS.TRIPS, QUERY_KEYS.TRIP_DETAILS, tripId]
  return useMutation({
    mutationFn: updateTrip,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
      onSuccess?.()
      toast.success("Trip successfully updated")
    },
    onError: (err) => toast.error(err.message),
  })
}

export default useUpdateTrip

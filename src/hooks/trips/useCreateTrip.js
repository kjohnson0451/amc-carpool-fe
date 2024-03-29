import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTrip } from "@services/trips/api"
import QUERY_KEYS from "@config/queryKeys"
import toast from "react-hot-toast"

const useCreateTrip = ({ onSuccess }) => {
  const queryClient = useQueryClient()
  const queryKey = [QUERY_KEYS.TRIPS]
  return useMutation({
    mutationFn: createTrip,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
      onSuccess?.()
      toast.success("Trip successfully created")
    },
    onError: (err) => toast.error(err.message),
  })
}

export default useCreateTrip

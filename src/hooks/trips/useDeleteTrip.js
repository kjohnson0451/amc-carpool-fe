import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTrip } from "@services/trips/api"
import QUERY_KEYS from "@config/queryKeys"
import toast from "react-hot-toast"

const useDeleteTrip = () => {
  const queryClient = useQueryClient()
  const queryKey = [QUERY_KEYS.TRIPS]
  return useMutation({
    mutationFn: deleteTrip,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
      toast.success("Trip successfully deleted")
    },
    onError: (err) => toast.error(err.message),
  })
}

export default useDeleteTrip

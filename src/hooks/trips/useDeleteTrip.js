import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTrip } from "@services/trips/api"
import QUERY_KEYS from "@config/queryKeys"

const useDeleteTrip = () => {
  const queryClient = useQueryClient()
  const queryKey = [QUERY_KEYS.TRIPS]
  return useMutation({
    mutationFn: deleteTrip,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
    },
  })
}

export default useDeleteTrip

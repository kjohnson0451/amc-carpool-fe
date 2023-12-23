import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTrip } from "@services/api"
import QUERY_KEYS from "@config/queryKeys"

const useCreateTrip = (reset) => {
  const queryClient = useQueryClient()
  const queryKey = [QUERY_KEYS.TRIPS]
  return useMutation({
    mutationFn: createTrip,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
      reset()
    },
  })
}

export default useCreateTrip

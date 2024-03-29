import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTrip } from "@services/trips/api"
import QUERY_KEYS from "@config/queryKeys"

const useCreateTrip = ({ onSuccess }) => {
  const queryClient = useQueryClient()
  const queryKey = [QUERY_KEYS.TRIPS]
  return useMutation({
    mutationFn: createTrip,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
      onSuccess?.()
    },
  })
}

export default useCreateTrip

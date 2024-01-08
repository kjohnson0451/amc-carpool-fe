import { useParams } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createCarpoolGroup } from "@services/carpoolGroups/api"
import QUERY_KEYS from "@config/queryKeys"

const useCreateCarpoolGroup = () => {
  const { tripId } = useParams()
  const queryClient = useQueryClient()
  const queryKey = [QUERY_KEYS.TRIPS, QUERY_KEYS.TRIP_DETAILS, tripId]
  return useMutation({
    mutationFn: () => createCarpoolGroup(tripId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
    },
  })
}

export default useCreateCarpoolGroup

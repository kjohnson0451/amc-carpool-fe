import { useParams } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateParticipant } from "@services/participants/api"
import QUERY_KEYS from "@config/queryKeys"

const useUpdateParticipant = ({ onSuccess }) => {
  const { tripId } = useParams()
  const queryClient = useQueryClient()
  const queryKey = [QUERY_KEYS.TRIPS, QUERY_KEYS.TRIP_DETAILS, tripId]
  return useMutation({
    mutationFn: updateParticipant,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
      onSuccess?.()
    },
  })
}

export default useUpdateParticipant

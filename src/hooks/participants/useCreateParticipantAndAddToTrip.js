import { useParams } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createParticipantAndAddToTrip } from "@services/participants/api"
import QUERY_KEYS from "@config/queryKeys"

const useCreateParticipantAndAddToTrip = ({ reset, onCloseModal }) => {
  const { tripId } = useParams()
  const queryClient = useQueryClient()
  const queryKey = [QUERY_KEYS.TRIPS, QUERY_KEYS.TRIP_DETAILS, tripId]
  return useMutation({
    mutationFn: (participantData) =>
      createParticipantAndAddToTrip({ tripId, participantData }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
      reset?.()
      onCloseModal?.()
    },
  })
}

export default useCreateParticipantAndAddToTrip

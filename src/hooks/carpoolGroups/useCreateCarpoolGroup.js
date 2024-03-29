import { useParams } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createCarpoolGroup } from "@services/carpoolGroups/api"
import QUERY_KEYS from "@config/queryKeys"
import toast from "react-hot-toast"

const useCreateCarpoolGroup = () => {
  const { tripId } = useParams()
  const queryClient = useQueryClient()
  const queryKey = [QUERY_KEYS.TRIPS, QUERY_KEYS.TRIP_DETAILS, tripId]
  return useMutation({
    mutationFn: () => createCarpoolGroup(tripId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
      toast.success("Carpool group successfully created")
    },
    onError: (err) => toast.error(err.message),
  })
}

export default useCreateCarpoolGroup

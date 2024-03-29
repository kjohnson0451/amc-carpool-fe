import { useParams } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCarpoolGroup } from "@services/carpoolGroups/api"
import QUERY_KEYS from "@config/queryKeys"
import toast from "react-hot-toast"

const useDeleteCarpoolGroup = () => {
  const { tripId } = useParams()
  const queryClient = useQueryClient()
  const queryKey = [QUERY_KEYS.TRIPS, QUERY_KEYS.TRIP_DETAILS, tripId]
  return useMutation({
    mutationFn: deleteCarpoolGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
      toast.success("Carpool group successfully deleted")
    },
    onError: (err) => toast.error(err.message),
  })
}

export default useDeleteCarpoolGroup

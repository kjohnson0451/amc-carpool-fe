import axiosInstance from "@utils/axiosInstance"

export const createParticipantAndAddToTrip = async ({
  tripId,
  participantData,
}) => {
  try {
    const response = await axiosInstance.post(
      `/participants/add-to-trip/${tripId}`,
      participantData,
    )
    return response.data.participant
  } catch (error) {
    throw new Error("Error creating participant")
  }
}

export const updateParticipant = async ({ participantId, participantData }) => {
  try {
    await axiosInstance.patch(`/participants/${participantId}`, participantData)
  } catch (error) {
    throw new Error("Error updating participant")
  }
}

export const deleteParticipant = async (participantId) => {
  try {
    await axiosInstance.delete(`/participants/${participantId}`)
  } catch (error) {
    throw new Error("Error deleting participants")
  }
}

export const moveParticipantToCarpoolGroup = async ({
  participantId,
  carpoolGroupId,
}) => {
  try {
    await axiosInstance.patch(
      `participants/${participantId}/move-to-carpool-group/${carpoolGroupId}`,
    )
  } catch (error) {
    throw new Error("Error moving participant to carpool group")
  }
}

export const removeParticipantFromCarpoolGroup = async (participantId) => {
  try {
    await axiosInstance.patch(
      `participants/${participantId}/remove-from-carpool-group`,
    )
  } catch (error) {
    throw new Error("Error removing participant from carpool group")
  }
}

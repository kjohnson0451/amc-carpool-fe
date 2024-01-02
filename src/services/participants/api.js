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

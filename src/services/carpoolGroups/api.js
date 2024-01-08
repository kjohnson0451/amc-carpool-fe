import axiosInstance from "@utils/axiosInstance"

export const createCarpoolGroup = async (tripId) => {
  try {
    const response = await axiosInstance.post(`/carpool_groups/${tripId}`)
    return response.data.carpoolGroup
  } catch (error) {
    throw new Error("Error creating carpool group")
  }
}

export const deleteCarpoolGroup = async (carpoolGroupId) => {
  try {
    await axiosInstance.delete(`/carpool_groups/${carpoolGroupId}`)
  } catch (error) {
    throw new Error("Error deleting carpool group")
  }
}

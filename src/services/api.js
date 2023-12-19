import axios from "axios"

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const getTrips = async () => {
  try {
    const response = await axiosInstance.get("/trips")
    return response.data.trips
  } catch (error) {
    throw new Error("Error fetching trips")
  }
}

export const deleteTrip = async (tripId) => {
  try {
    await axiosInstance.delete(`/trips/${tripId}`)
  } catch (error) {
    throw new Error("Error deleting trip")
  }
}

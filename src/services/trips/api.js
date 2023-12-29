import axiosInstance from "@utils/axiosInstance"

export const getTrips = async () => {
  try {
    const response = await axiosInstance.get("/trips")
    return response.data.trips
  } catch (error) {
    throw new Error("Error fetching trips")
  }
}

export const getTrip = async (tripId) => {
  try {
    const response = await axiosInstance.get(`/trips/${tripId}`)
    return response.data.trip
  } catch (error) {
    throw new Error("Error fetching trip")
  }
}

export const createTrip = async (tripData) => {
  try {
    const response = await axiosInstance.post("/trips", tripData)
    return response.data.trip
  } catch (error) {
    throw new Error("Error creating trip")
  }
}

export const updateTrip = async ({ tripId, tripData }) => {
  try {
    await axiosInstance.patch(`/trips/${tripId}`, tripData)
  } catch (error) {
    throw new Error("Error updating trip")
  }
}

export const deleteTrip = async (tripId) => {
  try {
    await axiosInstance.delete(`/trips/${tripId}`)
  } catch (error) {
    throw new Error("Error deleting trip")
  }
}

function TripDetails({ tripState }) {
  const { data: trip, isLoading, isError } = tripState

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching trip</p>
  }

  return <p>{trip?.name}</p>
}

export default TripDetails

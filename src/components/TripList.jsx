import useTripData from "@hooks/useTripData"

function TripList() {
  useTripData()
  const { data: trips, isLoading, isError } = useTripData()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching trips</p>
  }

  return (
    <ul>
      {trips.map((trip) => (
        <li key={trip.id}>{trip.name}</li>
      ))}
    </ul>
  )
}

export default TripList

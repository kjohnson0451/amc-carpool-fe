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
      {trips.map((trip, index) => (
        <li
          key={trip.id}
          className={`py-2 px-4 ${
            index % 2 === 0 ? "bg-custom-gray-light" : "bg-custom-gray-lightest"
          } hover:bg-purple-900`}
        >
          {trip.name}
        </li>
      ))}
    </ul>
  )
}

export default TripList

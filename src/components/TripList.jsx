import useTrips from "@hooks/trips/useTrips"

import TripListEntry from "@components/TripListEntry"

function TripList() {
  const { data: trips, isLoading, isError } = useTrips()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching trips</p>
  }

  return (
    <>
      {trips.map((trip, index) => (
        <TripListEntry trip={trip} index={index} key={trip.id} />
      ))}
    </>
  )
}

export default TripList

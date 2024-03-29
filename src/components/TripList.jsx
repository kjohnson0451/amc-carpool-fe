import useTrips from "@hooks/trips/useTrips"

import TripListEntry from "@components/TripListEntry"
import Spinner from "@ui/Spinner"

function TripList() {
  const { data: trips, isLoading, isError } = useTrips()

  if (isLoading) {
    return <Spinner />
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

import MainLayout from "@ui/MainLayout"
import useTrip from "@hooks/trips/useTrip"
import TripDetails from "@components/TripDetails"

// The top-level page for an individual trip. You typically get
// to an individual trip by clicking on one on in the Trips page
// defined in Trips.jsx

function Trip() {
  const { data: trip } = useTrip()
  const header = trip?.name
  const previousPage = { label: "all trips", to: "/trips" }

  return (
    <MainLayout header={header} previousPage={previousPage}>
      <TripDetails />
    </MainLayout>
  )
}

export default Trip

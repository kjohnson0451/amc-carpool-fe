import MainLayout from "@ui/MainLayout"
import useTrip from "@hooks/trips/useTrip"
import TripDetails from "@components/TripDetails"

function Trip() {
  const tripState = useTrip()
  const header = tripState?.data?.name
  const previousPage = { label: "all trips", to: "/trips" }

  return (
    <MainLayout header={header} previousPage={previousPage}>
      <TripDetails tripState={tripState} />
    </MainLayout>
  )
}

export default Trip

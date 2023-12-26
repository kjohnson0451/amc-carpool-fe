import MainLayout from "@ui/MainLayout"
import useTrip from "@hooks/useTrip"
import TripDetails from "@components/TripDetails"

function Trip() {
  const tripState = useTrip()
  const header = tripState?.data?.name

  return (
    <MainLayout header={header}>
      <TripDetails tripState={tripState} />
    </MainLayout>
  )
}

export default Trip

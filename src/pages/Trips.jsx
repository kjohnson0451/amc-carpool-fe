import MainLayout from "@ui/MainLayout"
import TripList from "@components/TripList"

function Trips() {
  const header = "All trips"

  return (
    <MainLayout header={header}>
      <TripList />
    </MainLayout>
  )
}

export default Trips

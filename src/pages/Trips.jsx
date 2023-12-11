import MainLayout from "@ui/MainLayout"
import TripList from "@components/TripList"

function Trips() {
  const header = "All trips"

  return (
    <div>
      <MainLayout header={header}>
        <TripList />
      </MainLayout>
    </div>
  )
}

export default Trips

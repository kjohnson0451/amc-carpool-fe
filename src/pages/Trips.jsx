import MainLayout from "@ui/MainLayout"
import TripList from "@components/TripList"
import AddTrip from "@components/AddTrip"

function Trips() {
  const header = "All trips"

  return (
    <MainLayout header={header}>
      <AddTrip />
      <div className="mt-4">
        <TripList />
      </div>
    </MainLayout>
  )
}

export default Trips

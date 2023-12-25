import MainLayout from "@ui/MainLayout"
import TripList from "@components/TripList"
import CreateTripForm from "@components/CreateTripForm"
import { useState } from "react"

function Trips() {
  const header = "All trips"
  const [showForm, setShowForm] = useState(false)

  return (
    <MainLayout header={header}>
      <button type="button" onClick={() => setShowForm((show) => !show)}>
        Add new trip
      </button>
      {showForm && <CreateTripForm />}
      <div className="mt-4">
        <TripList />
      </div>
    </MainLayout>
  )
}

export default Trips

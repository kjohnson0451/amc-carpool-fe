import { useParams } from "react-router-dom"
import useTrip from "@hooks/trips/useTrip"
import useCreateCarpoolGroup from "@hooks/carpoolGroups/useCreateCarpoolGroup"
import CarpoolGroup from "@components/CarpoolGroup"
import AddParticipant from "@components/AddParticipant"
import EditInPlace from "@ui/EditInPlace"
import Button from "@ui/Button"

function TripDetails() {
  const { tripId } = useParams()
  const { data: trip, isLoading, isError } = useTrip()
  const { mutate: createCarpoolGroup } = useCreateCarpoolGroup()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching trip</p>
  }

  const { name, date, trailhead, Participants, CarpoolGroups } = trip
  const resourceType = "trip"

  return (
    <>
      <div className="lg:grid lg:grid-cols-3">
        <EditInPlace
          label="Trip name"
          value={name}
          type="text"
          resourceType={resourceType}
          resourceId={tripId}
        />
        <EditInPlace
          label="Date"
          value={date}
          type="date"
          resourceType={resourceType}
          resourceId={tripId}
        />
        <EditInPlace
          label="Trailhead"
          value={trailhead}
          type="text"
          resourceType={resourceType}
          resourceId={tripId}
        />
      </div>
      <div className="mt-2 flex">
        <Button type="button" onClick={createCarpoolGroup}>
          Add Carpool Group
        </Button>
        <span className="ml-2">
          <AddParticipant />
        </span>
      </div>
      {Participants.length > 0 && (
        <CarpoolGroup participants={Participants} isUngrouped />
      )}
      {CarpoolGroups.map((carpoolGroup, index) => (
        <CarpoolGroup
          id={carpoolGroup.id}
          participants={carpoolGroup.Participants}
          index={index}
          key={carpoolGroup.id}
        />
      ))}
    </>
  )
}

export default TripDetails

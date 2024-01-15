import { useParams } from "react-router-dom"
import useTrip from "@hooks/trips/useTrip"
import useUpdateTrip from "@hooks/trips/useUpdateTrip"
import useCreateCarpoolGroup from "@hooks/carpoolGroups/useCreateCarpoolGroup"
import CarpoolGroup from "@components/CarpoolGroup"
import AddParticipant from "@components/AddParticipant"
import EditableField from "@ui/EditableField"
import Button from "@ui/Button"

function TripDetails() {
  const { tripId } = useParams()
  const { data: trip, isLoading, isError } = useTrip()
  const { mutate: updateTrip } = useUpdateTrip()
  const { mutate: createCarpoolGroup } = useCreateCarpoolGroup()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching trip</p>
  }

  const { name, date, trailhead, Participants, CarpoolGroups } = trip

  return (
    <>
      <div className="lg:grid lg:grid-cols-3">
        <EditableField
          label="Trip name"
          value={name}
          type="text"
          onUpdate={(editedValue) =>
            updateTrip({ tripId, tripData: { name: editedValue } })
          }
        />
        <EditableField
          label="Date"
          value={date}
          type="date"
          onUpdate={(editedValue) =>
            updateTrip({ tripId, tripData: { date: editedValue } })
          }
        />
        <EditableField
          label="Trailhead"
          value={trailhead}
          type="text"
          onUpdate={(editedValue) =>
            updateTrip({ tripId, tripData: { trailhead: editedValue } })
          }
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

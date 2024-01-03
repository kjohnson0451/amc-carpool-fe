import useUpdateTrip from "@hooks/trips/useUpdateTrip"
import useCreateCarpoolGroup from "@hooks/carpoolGroups/useCreateCarpoolGroup"
import CarpoolGroup from "@components/CarpoolGroup"
import EditableField from "@ui/EditableField"
import { useParams } from "react-router-dom"
import AddParticipant from "./AddParticipant"

function TripDetails({ tripState }) {
  const { tripId } = useParams()
  const { data: trip, isLoading, isError } = tripState
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
          onUpdate={(editedValue) =>
            updateTrip({ tripId, tripData: { name: editedValue } })
          }
        />
        <EditableField
          label="Date"
          value={date}
          onUpdate={(editedValue) =>
            updateTrip({ tripId, tripData: { date: editedValue } })
          }
        />
        <EditableField
          label="Trailhead"
          value={trailhead}
          onUpdate={(editedValue) =>
            updateTrip({ tripId, tripData: { trailhead: editedValue } })
          }
        />
      </div>
      <div className="mt-2 flex">
        <button onClick={createCarpoolGroup}>Add Carpool Group</button>
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

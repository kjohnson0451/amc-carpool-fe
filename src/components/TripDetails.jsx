import useUpdateTrip from "@hooks/trips/useUpdateTrip"
import useCreateCarpoolGroup from "@hooks/carpoolGroups/useCreateCarpoolGroup"
import CarpoolGroup from "@components/CarpoolGroup"
import EditableField from "@ui/EditableField"

function TripDetails({ tripState }) {
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
          name="name"
          label="Trip name"
          value={name}
          mutate={updateTrip}
        />
        <EditableField
          name="date"
          label="Date"
          value={date}
          mutate={updateTrip}
        />
        <EditableField
          name="trailhead"
          label="Trailhead"
          value={trailhead}
          mutate={updateTrip}
        />
      </div>
      <div className="mt-2 flex">
        <button onClick={createCarpoolGroup}>Add Carpool Group</button>
        <button className="ml-2">Add Participant</button>
      </div>
      {Participants.length > 0 && (
        <CarpoolGroup participants={Participants} isUngrouped />
      )}
      {CarpoolGroups.map((carpoolGroup, index) => (
        <CarpoolGroup
          participants={carpoolGroup.Participants}
          index={index}
          key={carpoolGroup.id}
        />
      ))}
    </>
  )
}

export default TripDetails

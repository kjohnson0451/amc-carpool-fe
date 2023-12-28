import useUpdateTrip from "@hooks/useUpdateTrip"
import EditableField from "@ui/EditableField"

function TripDetails({ tripState }) {
  const { data: trip, isLoading, isError } = tripState
  const { mutate } = useUpdateTrip()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching trip</p>
  }

  const { name, Participants, CarpoolGroups } = trip

  return (
    <>
      <div>
        <EditableField
          name="name"
          label="Trip name"
          value={name}
          mutate={mutate}
        />
      </div>
      {Participants.length > 0 && (
        <div className="rounded-lg border border-stone-600 p-3">
          <h3>Ungrouped</h3>
          {Participants.map((participant) => (
            <div key={participant.id}>{participant.name}</div>
          ))}
        </div>
      )}
      {CarpoolGroups.map((carpoolGroup, index) => (
        <div
          key={carpoolGroup.id}
          className="rounded-lg border border-stone-600 p-3"
        >
          <h3>Carpool Group #{index + 1}</h3>
          {carpoolGroup.Participants.map((participant) => (
            <div key={participant.id}>{participant.name}</div>
          ))}
        </div>
      ))}
    </>
  )
}

export default TripDetails

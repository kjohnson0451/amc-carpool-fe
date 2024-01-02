import EditableField from "@ui/EditableField"
import useUpdateParticipant from "@hooks/participants/useUpdateParticipant"

function Participant({ participant }) {
  const { mutate: updateParticipant } = useUpdateParticipant(participant.id)

  return (
    <div className="mt-2 grid grid-cols-2 rounded-md border border-stone-600 p-1">
      <EditableField
        label="Participant name"
        value={participant.name}
        mutate={updateParticipant}
        onUpdate={(editedValue) =>
          updateParticipant({
            participantId: participant.id,
            participantData: { name: editedValue },
          })
        }
      />
      <EditableField
        label="Status"
        value={participant.status}
        onUpdate={(editedValue) =>
          updateParticipant({
            participantId: participant.id,
            participantData: { status: editedValue },
          })
        }
      />
      <EditableField
        label="Departure time"
        value={participant.departureTime}
        onUpdate={(editedValue) =>
          updateParticipant({
            participantId: participant.id,
            participantData: { departureTime: editedValue },
          })
        }
      />
      <EditableField
        label="Departure location"
        value={participant.departureLocation}
        onUpdate={(editedValue) =>
          updateParticipant({
            participantId: participant.id,
            participantData: { departureLocation: editedValue },
          })
        }
      />
      <EditableField
        label="Email"
        value={participant.email}
        onUpdate={(editedValue) =>
          updateParticipant({
            participantId: participant.id,
            participantData: { email: editedValue },
          })
        }
      />
      <EditableField
        label="Phone"
        value={participant.phone}
        onUpdate={(editedValue) =>
          updateParticipant({
            participantId: participant.id,
            participantData: { phone: editedValue },
          })
        }
      />
    </div>
  )
}

export default Participant

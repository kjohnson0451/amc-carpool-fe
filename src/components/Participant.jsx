import { HiMinus } from "react-icons/hi"
import EditableField from "@ui/EditableField"
import useUpdateParticipant from "@hooks/participants/useUpdateParticipant"
import useDeleteParticipant from "@hooks/participants/useDeleteParticipant"
import useRemoveParticipantFromCarpoolGroup from "@hooks/participants/useRemoveParticipantFromCarpoolGroup"
import IconButton from "@ui/IconButton"

function Participant({ participant }) {
  const { mutate: updateParticipant } = useUpdateParticipant()
  const { mutate: deleteParticipant, isPending: isDeleting } =
    useDeleteParticipant()
  const { mutate: removeParticipantFromCarpoolGroup, isPending: isRemoving } =
    useRemoveParticipantFromCarpoolGroup()

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
      <span className="w-[29px]">
        <IconButton
          onClick={() => {
            removeParticipantFromCarpoolGroup(participant.id)
          }}
          disabled={isRemoving}
        >
          <HiMinus />
        </IconButton>
      </span>
      <button
        className="w-[87px]"
        type="button"
        onClick={() => {
          deleteParticipant(participant.id)
        }}
        disabled={isDeleting}
      >
        Delete
      </button>
    </div>
  )
}

export default Participant

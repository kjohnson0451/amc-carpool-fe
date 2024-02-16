import { HiMinus } from "react-icons/hi"
import EditInPlace from "@ui/EditInPlace"
import useUpdateParticipant from "@hooks/participants/useUpdateParticipant"
import useDeleteParticipant from "@hooks/participants/useDeleteParticipant"
import useRemoveParticipantFromCarpoolGroup from "@hooks/participants/useRemoveParticipantFromCarpoolGroup"
import IconButton from "@ui/IconButton"
import ConfirmDeleteModal from "@ui/ConfirmDeleteModal"

function Participant({ participant }) {
  const { mutate: updateParticipant } = useUpdateParticipant()
  const { mutate: deleteParticipant, isPending: isDeleting } =
    useDeleteParticipant()
  const { mutate: removeParticipantFromCarpoolGroup, isPending: isRemoving } =
    useRemoveParticipantFromCarpoolGroup()

  return (
    <div className="mt-2 grid grid-cols-2 rounded-md border border-stone-600 p-1">
      <EditInPlace
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
      <EditInPlace
        label="Status"
        value={participant.status}
        type="text"
        onUpdate={(editedValue) =>
          updateParticipant({
            participantId: participant.id,
            participantData: { status: editedValue },
          })
        }
      />
      <EditInPlace
        label="Departure location"
        value={participant.departureLocation}
        type="text"
        onUpdate={(editedValue) =>
          updateParticipant({
            participantId: participant.id,
            participantData: { departureLocation: editedValue },
          })
        }
      />
      <EditInPlace
        label="Email"
        value={participant.email}
        type="text"
        onUpdate={(editedValue) =>
          updateParticipant({
            participantId: participant.id,
            participantData: { email: editedValue },
          })
        }
      />
      <EditInPlace
        label="Phone"
        value={participant.phone}
        type="text"
        onUpdate={(editedValue) =>
          updateParticipant({
            participantId: participant.id,
            participantData: { phone: editedValue },
          })
        }
      />
      <div>
        <IconButton
          onClick={() => {
            removeParticipantFromCarpoolGroup(participant.id)
          }}
          disabled={isRemoving}
        >
          <HiMinus />
        </IconButton>
      </div>

      <div>
        <ConfirmDeleteModal
          resourceName="Participant"
          onConfirm={() => deleteParticipant(participant.id)}
          disabled={isDeleting}
        />
      </div>
    </div>
  )
}

export default Participant

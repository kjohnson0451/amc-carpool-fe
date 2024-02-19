import { HiMinus } from "react-icons/hi"
import EditInPlace from "@ui/EditInPlace"
import useDeleteParticipant from "@hooks/participants/useDeleteParticipant"
import useRemoveParticipantFromCarpoolGroup from "@hooks/participants/useRemoveParticipantFromCarpoolGroup"
import IconButton from "@ui/IconButton"
import ConfirmDeleteModal from "@ui/ConfirmDeleteModal"

function Participant({ participant }) {
  const { mutate: deleteParticipant, isPending: isDeleting } =
    useDeleteParticipant()
  const { mutate: removeParticipantFromCarpoolGroup, isPending: isRemoving } =
    useRemoveParticipantFromCarpoolGroup()

  const resourceType = "participant"

  return (
    <div className="mt-2 grid grid-cols-2 rounded-md border border-stone-600 p-1">
      <EditInPlace
        label="Participant name"
        value={participant.name}
        type="text"
        resourceType={resourceType}
        resourceId={participant.id}
      />
      <EditInPlace
        label="Status"
        value={participant.status}
        type="text"
        resourceType={resourceType}
        resourceId={participant.id}
      />
      <EditInPlace
        label="Departure location"
        value={participant.departureLocation}
        type="text"
        resourceType={resourceType}
        resourceId={participant.id}
      />
      <EditInPlace
        label="Email"
        value={participant.email}
        type="text"
        resourceType={resourceType}
        resourceId={participant.id}
      />
      <EditInPlace
        label="Phone"
        value={participant.phone}
        type="text"
        resourceType={resourceType}
        resourceId={participant.id}
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

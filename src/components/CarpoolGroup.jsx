import Participant from "@components/Participant"
import MoveParticipantToTrip from "@components/MoveParticipantToTrip"
import useDeleteCarpoolGroup from "@hooks/carpoolGroups/useDeleteCarpoolGroup"
import ConfirmDeleteModal from "@ui/ConfirmDeleteModal"

// The main component for an individual carpool group

function CarpoolGroup({ id, participants, index, isUngrouped }) {
  const { mutate: deleteCarpoolGroup, isPending: isDeleting } =
    useDeleteCarpoolGroup()

  if (index === undefined && !isUngrouped) {
    throw new Error(
      "If a carpool group is not of type 'Ungrouped', it must have an index",
    )
  }

  const header = isUngrouped ? "Ungrouped" : `Carpool Group #${index + 1}`

  return (
    <div
      className={`${
        !isUngrouped && "bg-custom-gray-darkest"
      } mt-2 rounded-lg border border-stone-600 p-3`}
    >
      <div className="flex justify-between">
        <h3>{header}</h3>
        <ConfirmDeleteModal
          resourceName="Carpool Group"
          onConfirm={() => deleteCarpoolGroup(id)}
          disabled={isDeleting}
        />
      </div>
      {participants.map((participant) => (
        <Participant participant={participant} key={participant.id} />
      ))}
      {!isUngrouped && (
        <div className="mt-2">
          <MoveParticipantToTrip carpoolGroupId={id} />
        </div>
      )}
    </div>
  )
}

export default CarpoolGroup

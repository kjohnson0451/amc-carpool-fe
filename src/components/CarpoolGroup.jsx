import Participant from "@components/Participant"
import useDeleteCarpoolGroup from "@hooks/carpoolGroups/useDeleteCarpoolGroup"

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
        <button
          type="button"
          onClick={() => {
            deleteCarpoolGroup(id)
          }}
          disabled={isDeleting}
        >
          Delete
        </button>
      </div>
      {participants.map((participant) => (
        <Participant participant={participant} key={participant.id} />
      ))}
    </div>
  )
}

export default CarpoolGroup

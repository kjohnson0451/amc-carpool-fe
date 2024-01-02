import Participant from "@components/Participant"

function CarpoolGroup({ participants, index, isUngrouped }) {
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
      <h3>{header}</h3>
      {participants.map((participant) => (
        <Participant participant={participant} key={participant.id} />
      ))}
    </div>
  )
}

export default CarpoolGroup

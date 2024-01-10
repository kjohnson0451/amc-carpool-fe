import { useForm } from "react-hook-form"
import useTrip from "@hooks/trips/useTrip"
import useMoveParticipantToCarpoolGroup from "@hooks/participants/useMoveParticipantToCarpoolGroup"
import Input from "@ui/Input"
import getListOfAllParticipantsFromTrip from "@utils/getListOfAllParticipantsFromTrip"

function MoveParticipantToCarpoolGroupForm({ carpoolGroupId, onCloseModal }) {
  const { register, handleSubmit } = useForm()
  const { data: trip, isLoading, isError } = useTrip()
  const { mutate: moveParticipantToCarpoolGroup, isPending: isMoving } =
    useMoveParticipantToCarpoolGroup()

  if (isLoading || isError) return null

  function onSubmit(data) {
    const name = data?.name
    if (!name) onCloseModal?.()

    const participants = getListOfAllParticipantsFromTrip(trip)

    const participantId = participants.find(
      (participant) => participant.name === name,
    )?.id

    if (!participantId) onCloseModal?.()

    moveParticipantToCarpoolGroup({ participantId, carpoolGroupId })
    onCloseModal?.()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[330px] p-2">
      <Input
        label="Name of participant to add"
        id="name"
        type="text"
        register={register("name")}
      />
      <div className="mt-3">
        <button type="button" onClick={() => onCloseModal?.()}>
          Cancel
        </button>
        <button type="submit" className="ml-3" disabled={isMoving}>
          Add participant
        </button>
      </div>
    </form>
  )
}

export default MoveParticipantToCarpoolGroupForm

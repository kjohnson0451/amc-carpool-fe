import { useForm } from "react-hook-form"
import Input from "@ui/Input"
import useCreateParticipantAndAddToTrip from "@hooks/participants/useCreateParticipantAndAddToTrip"

function CreateParticipantForm({ onCloseModal }) {
  const { register, handleSubmit, reset } = useForm()
  const { mutate: createTrip, isPending: isCreating } =
    useCreateParticipantAndAddToTrip(reset)

  function onSubmit(data) {
    createTrip(data)
    onCloseModal?.()
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[330px] rounded-md bg-custom-gray-darkest p-3"
    >
      <Input
        label="Participant name"
        id="name"
        type="text"
        register={register("name")}
      />
      <Input
        label="Status"
        id="status"
        type="text"
        register={register("status")}
      />
      <Input
        label="Departure time"
        id="departureTime"
        type="text"
        register={register("departureTime")}
      />
      <Input
        label="Departure location"
        id="departureLocation"
        type="text"
        register={register("departureLocation")}
      />
      <Input
        label="Email"
        id="email"
        type="text"
        register={register("email")}
      />
      <Input
        label="Phone"
        id="phone"
        type="text"
        register={register("phone")}
      />
      <div className="mt-3">
        <button type="reset" onClick={() => onCloseModal?.()}>
          Cancel
        </button>
        <button type="submit" className="ml-3" disabled={isCreating}>
          Add new participant
        </button>
      </div>
    </form>
  )
}

export default CreateParticipantForm

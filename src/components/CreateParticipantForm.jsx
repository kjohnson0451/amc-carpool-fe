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
      {/* This eslint rule seems to be busted */}
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="mt-2 block first:mt-0">
        Status
        <select className="block" id="status" {...register("status")}>
          <option value="N">Need Ride</option>
          <option value="D">Can Drive</option>
        </select>
      </label>
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

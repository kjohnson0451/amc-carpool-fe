import { useForm } from "react-hook-form"
import Input from "@ui/Input"
import useCreateTrip from "@hooks/trips/useCreateTrip"

function CreateTripForm({ onCloseModal }) {
  const { register, handleSubmit, reset } = useForm()
  const { mutate: createTrip, isPending: isCreating } = useCreateTrip(reset)

  function onSubmit(data) {
    createTrip(data)
    onCloseModal?.()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[330px] p-2">
      <Input
        label="Trip Name"
        id="name"
        type="text"
        register={register("name")}
      />
      <Input label="Date" id="date" type="date" register={register("date")} />
      <Input
        label="Trailhead"
        id="trailhead"
        type="text"
        register={register("trailhead")}
      />
      <div className="mt-3">
        <button type="reset" onClick={() => onCloseModal?.()}>
          Cancel
        </button>
        <button type="submit" className="ml-3" disabled={isCreating}>
          Create new trip
        </button>
      </div>
    </form>
  )
}

export default CreateTripForm

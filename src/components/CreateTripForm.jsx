import { useForm } from "react-hook-form"
import Input from "@ui/Input"
import useCreateTrip from "@hooks/useCreateTrip"

function CreateTripForm() {
  const { register, handleSubmit, reset } = useForm()
  const { mutate, isPending: isCreating } = useCreateTrip(reset)

  function onSubmit(data) {
    mutate(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[330px] rounded-md bg-custom-gray-darkest p-3"
    >
      <Input
        label="Trip Name"
        id="name"
        type="text"
        register={register("name")}
      />
      <Input label="Date" id="date" type="text" register={register("date")} />
      <Input
        label="Trailhead"
        id="trailhead"
        type="text"
        register={register("trailhead")}
      />
      <div className="mt-3">
        <button type="reset">Cancel</button>
        <button type="submit" className="ml-3" disabled={isCreating}>
          Create new trip
        </button>
      </div>
    </form>
  )
}

export default CreateTripForm

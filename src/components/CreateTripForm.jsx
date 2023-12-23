import Input from "@ui/Input"

function CreateTripForm() {
  return (
    <form className="w-[330px] rounded-md bg-custom-gray-darkest p-3">
      <Input label="Trip Name" id="name" type="text" />
      <Input label="Date" id="date" type="text" />
      <Input label="Trailhead" id="trailhead" type="text" />
      <div className="mt-3">
        <button type="button">Cancel</button>
        <button type="button" className="ml-3">
          Create new trip
        </button>
      </div>
    </form>
  )
}

export default CreateTripForm

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useForm, Controller } from "react-hook-form"
import DatePicker from "@ui/DatePicker"
import Button from "@ui/Button"
import useCreateTrip from "@hooks/trips/useCreateTrip"

function CreateTripForm({ onCloseModal }) {
  const { register, handleSubmit, reset, control } = useForm()
  const { mutate: createTrip, isPending: isCreating } = useCreateTrip(reset)

  function onSubmit(data) {
    createTrip(data)
    onCloseModal?.()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[300px] space-y-12">
        <div className="border-b border-gray-100/10 pb-8">
          <h2 className="text-base font-semibold leading-7 text-gray-100">
            Add new trip
          </h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-4">
            <div className="col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-100"
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                Trip name
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 bg-gray-900 py-1.5 pl-2 text-sm leading-6 text-gray-100 outline-none ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="text"
                  id="name"
                  autoComplete="off"
                  {...register("name")}
                />
              </div>
            </div>
            <div className="col-span-4">
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-gray-100"
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                Date
              </label>
              <div className="mt-2">
                <Controller
                  control={control}
                  name="date"
                  render={({ field: { onChange, value } }) => (
                    <DatePicker id="date" onChange={onChange} value={value} />
                  )}
                />
              </div>
            </div>
            <div className="col-span-4">
              <label
                htmlFor="trailhead"
                className="block text-sm font-medium leading-6 text-gray-100"
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                Trailhead
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 bg-gray-900 py-1.5 pl-2 text-sm leading-6 text-gray-100 outline-none ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="text"
                  id="trailhead"
                  autoComplete="off"
                  {...register("trailhead")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button
          type="button"
          className="bg-transparent"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isCreating}>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default CreateTripForm

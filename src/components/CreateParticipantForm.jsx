/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useForm } from "react-hook-form"
import Button from "@ui/Button"
import useCreateParticipantAndAddToTrip from "@hooks/participants/useCreateParticipantAndAddToTrip"

function CreateParticipantForm({ onCloseModal }) {
  const { register, handleSubmit, reset } = useForm()

  function onSuccess() {
    reset()
    onCloseModal()
  }

  const { mutate: createTrip, isPending: isCreating } =
    useCreateParticipantAndAddToTrip({ onSuccess })

  function onSubmit(data) {
    createTrip(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[300px] space-y-12">
        <div className="border-b border-gray-100/10 pb-8">
          <h2 className="text-base font-semibold leading-7 text-gray-100">
            Add new participant
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
                Participant name
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
                htmlFor="status"
                className="block text-sm font-medium leading-6 text-gray-100"
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                Status
              </label>
              <div className="mt-2">
                <select
                  className="block w-full rounded-md border-0 bg-gray-900 py-2.5 pl-2 text-sm leading-6 text-gray-100 outline-none ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  id="status"
                  {...register("status")}
                >
                  <option value="N">Need Ride</option>
                  <option value="D">Can Drive</option>
                </select>
              </div>
            </div>
            <div className="col-span-4">
              <label
                htmlFor="departureLocation"
                className="block text-sm font-medium leading-6 text-gray-100"
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                Departure location
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 bg-gray-900 py-1.5 pl-2 text-sm leading-6 text-gray-100 outline-none ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="text"
                  id="departureLocation"
                  autoComplete="off"
                  {...register("departureLocation")}
                />
              </div>
            </div>
            <div className="col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-100"
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 bg-gray-900 py-1.5 pl-2 text-sm leading-6 text-gray-100 outline-none ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="text"
                  id="email"
                  autoComplete="off"
                  {...register("email")}
                />
              </div>
            </div>
            <div className="col-span-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-100"
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                Phone
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 bg-gray-900 py-1.5 pl-2 text-sm leading-6 text-gray-100 outline-none ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="text"
                  id="phone"
                  autoComplete="off"
                  {...register("phone")}
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

export default CreateParticipantForm

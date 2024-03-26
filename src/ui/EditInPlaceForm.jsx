/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useEffect, useRef } from "react"
import { Controller, useForm } from "react-hook-form"
import DatePicker from "@ui/DatePicker"
import Button from "@ui/Button"
import useUpdateTrip from "@hooks/trips/useUpdateTrip"
import useUpdateParticipant from "@hooks/participants/useUpdateParticipant"

const updateHooks = {
  trip: useUpdateTrip,
  participant: useUpdateParticipant,
}

function EditInPlaceForm({
  label,
  id,
  value,
  type,
  resourceType,
  resourceId,
  onCloseModal,
}) {
  const { register, handleSubmit, reset, control } = useForm()

  function onSuccess() {
    reset()
    onCloseModal()
  }

  const updateHook = updateHooks[resourceType]

  if (updateHook === undefined) {
    throw new Error("Unknown resource type: see the updateHooks object")
  }

  const { mutate: updateResource, isPending: isUpdating } = updateHook({
    onSuccess,
  })

  const inputEl = useRef(null)
  const { ref, ...rest } = register(id)

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.value = value
      inputEl.current.focus()
    }
  }, [value])

  function onSubmit(data) {
    switch (resourceType) {
      case "trip":
        updateResource({ tripId: resourceId, tripData: data })
        break
      case "participant":
        updateResource({ participantId: resourceId, participantData: data })
        break
      default:
        throw new Error(
          "Unknown resource type: see the switch statement within onSubmit",
        )
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[300px] space-y-12">
        <div className="border-b border-gray-100/10 pb-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-4">
            <div className="col-span-4">
              <label
                htmlFor={id}
                className="block text-sm font-medium leading-6 text-gray-100"
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                {label}
              </label>
              <div className="mt-2">
                {type === "text" && (
                  <input
                    className="block w-full rounded-md border-0 bg-gray-900 py-1.5 pl-2 text-sm leading-6 text-gray-100 outline-none ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    type="text"
                    id={id}
                    autoComplete="off"
                    {...rest}
                    ref={(e) => {
                      ref(e)
                      inputEl.current = e
                    }}
                  />
                )}
                {type === "date" && (
                  <Controller
                    control={control}
                    name={id}
                    render={({ field: { onChange, dateValue } }) => (
                      <DatePicker
                        className="block w-full rounded-md border-0 bg-gray-900 py-1.5 pl-2 text-sm leading-6 text-gray-100 outline-none ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        id={id}
                        onChange={onChange}
                        value={dateValue}
                        autoComplete="off"
                      />
                    )}
                  />
                )}
                {type === "status" && (
                  <select
                    className="block w-full rounded-md border-0 bg-gray-900 py-2.5 pl-2 text-sm leading-6 text-gray-100 outline-none ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    id={id}
                    {...rest}
                    ref={(e) => {
                      ref(e)
                      inputEl.current = e
                    }}
                  >
                    <option value="N">Need Ride</option>
                    <option value="D">Can Drive</option>
                  </select>
                )}
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
        <Button type="submit" disabled={isUpdating}>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default EditInPlaceForm

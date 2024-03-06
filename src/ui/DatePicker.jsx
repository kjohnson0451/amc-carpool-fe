import { forwardRef, useEffect, useState } from "react"
import DatePickerReact from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"
import "../react-datepicker-override.css"

function CustomInput({ value, onChange, onClick }, ref) {
  return (
    <input
      className="block w-full rounded-md border-0 bg-gray-900 py-1.5 pl-2 text-sm leading-6 text-gray-100 outline-none ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
      value={value}
      onChange={onChange}
      onClick={onClick}
      ref={ref}
    />
  )
}

function DatePicker({ id, onChange }) {
  const [startDate, setStartDate] = useState(null)

  useEffect(() => {
    onChange(startDate)
  }, [onChange, startDate])

  const CustomInputInstance = forwardRef(CustomInput)
  return (
    <DatePickerReact
      id={id}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<CustomInputInstance />}
    />
  )
}

export default DatePicker

import { forwardRef, useEffect, useState } from "react"
import DatePickerReact from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"
import "../react-datepicker-override.css"

function CustomInput(
  { className, autoComplete, value, onChange, onClick },
  ref,
) {
  return (
    <input
      className={className}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      onClick={onClick}
      ref={ref}
    />
  )
}

function DatePicker({
  className = "",
  id,
  autoComplete = "on",
  value = null,
  onChange,
}) {
  const [startDate, setStartDate] = useState(value)

  // In order to sync the selected date with the react hook form of the parent
  // component, we must use a useEffect
  useEffect(() => {
    onChange(startDate)
  }, [onChange, startDate])

  const CustomInputInstance = forwardRef(CustomInput)
  return (
    <DatePickerReact
      id={id}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <CustomInputInstance
          className={className}
          autoComplete={autoComplete}
        />
      }
    />
  )
}

export default DatePicker

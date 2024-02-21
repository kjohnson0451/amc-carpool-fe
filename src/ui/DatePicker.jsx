import { forwardRef, useEffect, useState } from "react"
import DatePickerReact from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

// function CustomInput({ props, ref }) {
//   const { value } = props
//   return <input value={value} ref={ref} />
// }

// function DatePicker({ value, id }) {
//   const [startDate, setStartDate] = useState(new Date())
//   const CustomInputRef = forwardRef(CustomInput)
//   return (
//     <DatePickerReact
//       selected={startDate}
//       onChange={(date) => setStartDate(date)}
//       customInput={<CustomInputRef value={value} id={id} />}
//     />
//   )
// }

function CustomInput({ value, onChange, onClick }, ref) {
  return <input value={value} onChange={onChange} onClick={onClick} ref={ref} />
}

function DatePicker({ id, onChange }) {
  const [startDate, setStartDate] = useState(null)

  useEffect(() => {
    onChange(startDate)
  }, [onChange, startDate])

  const ExampleCustomInput = forwardRef(CustomInput)
  return (
    <DatePickerReact
      id={id}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
  )
}

export default DatePicker

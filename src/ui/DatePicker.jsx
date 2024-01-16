import DatePickerReact from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"
import "../react-datepicker-override.css"

function DatePicker({ value, onChange, id }) {
  return (
    <DatePickerReact
      id={id}
      selected={value}
      onChange={onChange}
      showPopperArrow={false}
    />
  )
}

export default DatePicker

import DatePickerReact from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

function DatePicker({ value, onChange, id }) {
  return <DatePickerReact id={id} selected={value} onChange={onChange} />
}

export default DatePicker

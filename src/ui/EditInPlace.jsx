import { FaEdit } from "react-icons/fa"

function EditInPlace({ label, value }) {
  return (
    <div className="flex items-center">
      <span className="mr-1 whitespace-nowrap">{label}: </span>
      <span className="m-w-0 cursor-pointer truncate">{value}</span>
      <span className="cursor-pointer pl-2.5">
        <FaEdit />
      </span>
    </div>
  )
}

export default EditInPlace

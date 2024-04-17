import { format, parseISO } from "date-fns"
import { FaEdit } from "react-icons/fa"
import Modal from "@ui/Modal"
import EditInPlaceForm from "@ui/EditInPlaceForm"

// The "Edit In Place" component consists of a field, the "Edit" icon,
// and a Modal in which we can make an edit to the field.
//
// The behavior will heavily depend on the type. So far, the types consist of:
// text
// status
// date

function EditInPlace({ label, id, value, type, resourceId, resourceType }) {
  const statusDictionary = { N: "Need Ride", D: "Can Drive" }
  return (
    <div className="flex items-center">
      <span className="mr-1 whitespace-nowrap">{label}: </span>
      <Modal>
        {/* The "Open" button for this modal is the entire Edit In Place field.
        If you click on that field,  */}
        <Modal.Open opens="create-trip-form">
          <span className="flex cursor-pointer items-center">
            <span className="m-w-0 truncate">
              {type === "text" && value}
              {type === "status" && statusDictionary[value]}
              {type === "date" && format(parseISO(value), "MM/dd/yy")}
            </span>
            <span className="ml-2.5">
              <FaEdit />
            </span>
          </span>
        </Modal.Open>
        <Modal.Window name="create-trip-form">
          <EditInPlaceForm
            label={label}
            id={id}
            value={value}
            type={type}
            resourceType={resourceType}
            resourceId={resourceId}
          />
        </Modal.Window>
      </Modal>
    </div>
  )
}

export default EditInPlace

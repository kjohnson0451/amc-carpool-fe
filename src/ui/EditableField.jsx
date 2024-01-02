import { useState } from "react"

function EditableField({ label, value, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedValue, setEditedValue] = useState(value)

  function handleEditClick() {
    setIsEditing(true)
  }

  function handleInputChange(e) {
    setEditedValue(e.target.value)
  }

  function handleUpdate() {
    onUpdate(editedValue)
    setIsEditing(false)
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleUpdate()
    }
  }

  return (
    <div className="flex">
      <span className="mr-1 whitespace-nowrap">{label}: </span>
      {isEditing ? (
        <input
          type="text"
          value={editedValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span className="m-w-0 truncate">{value}</span>
      )}
      {isEditing ? (
        <span className="cursor-pointer" onClick={handleUpdate}>
          ✓
        </span>
      ) : (
        <span className="cursor-pointer" onClick={handleEditClick}>
          🖉
        </span>
      )}
    </div>
  )
}

export default EditableField

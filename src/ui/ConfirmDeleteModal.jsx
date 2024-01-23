import Button from "@ui/Button"
import Modal from "@ui/Modal"
import ConfirmDelete from "@ui/ConfirmDelete"

function ConfirmDeleteModal({ resourceName, onConfirm, disabled }) {
  return (
    <Modal>
      <Modal.Open opens="delete-trip-confirm">
        <Button type="button">Delete</Button>
      </Modal.Open>
      <Modal.Window name="delete-trip-confirm">
        <ConfirmDelete
          resourceName={resourceName}
          onConfirm={onConfirm}
          disabled={disabled}
        />
      </Modal.Window>
    </Modal>
  )
}

export default ConfirmDeleteModal

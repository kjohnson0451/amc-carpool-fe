import CreateTripForm from "@components/CreateTripForm"
import Modal from "@ui/Modal"
import Button from "@ui/Button"

// Button and modal to add trip

function AddTrip() {
  return (
    <Modal>
      <Modal.Open opens="create-trip-form">
        <Button type="button">Add new trip</Button>
      </Modal.Open>
      <Modal.Window name="create-trip-form">
        <CreateTripForm />
      </Modal.Window>
    </Modal>
  )
}

export default AddTrip

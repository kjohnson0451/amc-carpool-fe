import CreateTripForm from "@components/CreateTripForm"
import Modal from "@ui/Modal"

function AddTrip() {
  return (
    <Modal>
      <Modal.Open opens="create-trip-form">
        <button type="button">Add new trip</button>
      </Modal.Open>
      <Modal.Window name="create-trip-form">
        <CreateTripForm />
      </Modal.Window>
    </Modal>
  )
}

export default AddTrip

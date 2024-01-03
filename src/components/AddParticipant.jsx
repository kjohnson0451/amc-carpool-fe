import CreateParticipantForm from "@components/CreateParticipantForm"
import Modal from "@ui/Modal"

function AddParticipant() {
  return (
    <Modal>
      <Modal.Open opens="create-participant-form">
        <button type="button">Add new participant</button>
      </Modal.Open>
      <Modal.Window name="create-participant-form">
        <CreateParticipantForm />
      </Modal.Window>
    </Modal>
  )
}

export default AddParticipant

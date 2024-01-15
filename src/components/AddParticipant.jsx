import CreateParticipantForm from "@components/CreateParticipantForm"
import Modal from "@ui/Modal"
import Button from "@ui/Button"

function AddParticipant() {
  return (
    <Modal>
      <Modal.Open opens="create-participant-form">
        <Button type="button">Add new participant</Button>
      </Modal.Open>
      <Modal.Window name="create-participant-form">
        <CreateParticipantForm />
      </Modal.Window>
    </Modal>
  )
}

export default AddParticipant

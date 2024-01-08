import MoveParticipantToCarpoolGroupForm from "@components/MoveParticipantToCarpoolGroupForm"
import { HiPlus } from "react-icons/hi"
import IconButton from "@ui/IconButton"
import Modal from "@ui/Modal"

function MoveParticipantToTrip({ carpoolGroupId }) {
  return (
    <Modal>
      <Modal.Open opens="move-participant-to-carpool-group-form">
        <IconButton>
          <HiPlus />
        </IconButton>
      </Modal.Open>
      <Modal.Window name="move-participant-to-carpool-group-form">
        <MoveParticipantToCarpoolGroupForm carpoolGroupId={carpoolGroupId} />
      </Modal.Window>
    </Modal>
  )
}

export default MoveParticipantToTrip

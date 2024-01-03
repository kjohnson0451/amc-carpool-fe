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

// function AddTrip() {
//   const [isOpenModal, setIsOpenModal] = useState(false)
//   return (
//     <div>
//       <button type="button" onClick={() => setIsOpenModal((show) => !show)}>
//         Add new trip
//       </button>
//       {isOpenModal && (
//         <Modal
//           onClose={() => {
//             setIsOpenModal(false)
//           }}
//         >
//           <CreateTripForm
//             onCloseModal={() => {
//               setIsOpenModal(false)
//             }}
//           />
//         </Modal>
//       )}
//     </div>
//   )
// }

export default AddTrip

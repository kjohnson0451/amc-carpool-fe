import { createPortal } from "react-dom"
import { HiXMark } from "react-icons/hi2"

function Modal({ children, onClose }) {
  return createPortal(
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-gray-700 bg-opacity-50 backdrop-blur transition duration-500">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-custom-gray-dark p-10 shadow-lg transition duration-500">
        <button className="absolute right-2 top-2 p-1.5" onClick={onClose}>
          <HiXMark />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  )
}

export default Modal

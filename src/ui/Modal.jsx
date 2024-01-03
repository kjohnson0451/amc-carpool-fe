import {
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"
import { createPortal } from "react-dom"
import { HiXMark } from "react-icons/hi2"

const ModalContext = createContext()

function Modal({ children }) {
  const [openName, setOpenName] = useState("")

  const close = useCallback(() => setOpenName(""), [])
  const open = setOpenName

  const contextValue = useMemo(
    () => ({ openName, close, open }),
    [openName, close, open],
  )

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  )
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext)
  return cloneElement(children, { onClick: () => open(opensWindowName) })
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext)
  if (name !== openName) return null

  return createPortal(
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-gray-700 bg-opacity-50 backdrop-blur transition duration-500">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-custom-gray-dark p-10 shadow-lg transition duration-500">
        <button className="absolute right-2 top-2 p-1.5" onClick={close}>
          <HiXMark />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  )
}

Modal.Open = Open
Modal.Window = Window

export default Modal

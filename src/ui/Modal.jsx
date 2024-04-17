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
import IconButton from "@ui/IconButton"
import useOutsideClick from "@hooks/ui/useOutsideClick"

// This Modal is a Compound Component. One advantage of using a compound component
// is that the modal itself keeps track of whether it's open or not, rather than
// the parent component.

const ModalContext = createContext()

function Modal({ children }) {
  const [openName, setOpenName] = useState("")

  // With useCallback, we cache the function definition
  const close = useCallback(() => setOpenName(""), [])
  const open = setOpenName

  // with useMemo, we cache the properties of our context
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
  // By using cloneElement, we can assign it a new prop, the `onClick` prop.
  // Now, whenever we click on the `Open` element, the Modal opens.
  return cloneElement(children, { onClick: () => open(opensWindowName) })
}

// By setting `name`, we're able to have multiple modals within the same parent component.
// If we didn't, we'd have no way to distinguish which `Open` button opens which modal.
function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext)
  const ref = useOutsideClick({ handler: close })

  if (name !== openName) return null

  // By using createPortal(), we are rendering this outside the DOM structure of the react app.
  // In this case, as a child element of document.body.
  // This is necessary so that the modal isn't cut off by an `overflow: hidden` css property of
  // a parent element.
  return createPortal(
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-gray-700 bg-opacity-50 backdrop-blur transition duration-500">
      <div
        ref={ref}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-custom-gray-dark p-10 shadow-lg transition duration-500"
      >
        <IconButton onClick={close} className="absolute right-2 top-2">
          <HiXMark />
        </IconButton>
        {/* Similar to above, we clone the element and give it a new prop `onCloseModal`
        This is necessary  */}
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  )
}

Modal.Open = Open
Modal.Window = Window

export default Modal

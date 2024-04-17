import { useEffect, useRef } from "react"

const useOutsideClick = ({ handler, listenCapturing = true }) => {
  const ref = useRef()

  // We have to surround this in a useEffect(), as we're depending on an outside event, `handler`

  useEffect(() => {
    const handleClick = (e) => {
      // In the parent component, we assign ref to the Modal (or whatever else) window.
      // Here, we're checking to see if we clicked outside of that window. If so, run the passed in
      // handler() function.
      if (ref.current && !ref.current.contains(e.target)) {
        handler()
      }
    }

    // As the parent component mounts, we need to add a click event listener to the document.
    //
    // We pass in `listenCapturing`, which defaults to true. We do this because if the event
    // "bubbled up" like it does by default, the Modal would close right as it opened because
    // as we're clicking on the "Open" button, we're also clicking on the outside of the Modal.
    // By passing in "true" as a third argument, we're only listening for events on the
    // "capturing phase", so the event will no longer "bubble up"
    document.addEventListener("click", handleClick, listenCapturing)

    // As the parent component unmounts, we need to remove
    // the click event listener from the document
    //
    // Same deal with bubbling up and capturing as above.
    return () =>
      document.removeEventListener("click", handleClick, listenCapturing)
  }, [handler, listenCapturing])

  return ref
}

export default useOutsideClick

function IconButton({ onClick, className, children }) {
  return (
    <button className={`${className} p-1.5`} onClick={onClick}>
      {children}
    </button>
  )
}

export default IconButton

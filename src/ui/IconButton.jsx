function IconButton({ onClick, className = "", children, disabled }) {
  return (
    <button
      className={`${className} p-1.5`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default IconButton

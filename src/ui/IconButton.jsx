function IconButton({
  type = "button",
  onClick,
  className = "",
  children,
  disabled,
}) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`${className} p-1.5`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default IconButton

import Button from "@ui/Button"

function IconButton({
  type = "button",
  onClick,
  className = "",
  children,
  disabled,
}) {
  return (
    <Button
      type={type}
      className={`${className} icon-button`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

export default IconButton

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
      className={`${className} px-1.5 py-1.5`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

export default IconButton

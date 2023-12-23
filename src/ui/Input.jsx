function Input({
  label = null,
  id,
  type,
  placeholder = null,
  disabled = false,
  register = null,
}) {
  return (
    <div className="grid-cols-fr mt-4 grid grid-cols-[1fr_1.2fr] first:mt-0">
      <span className="self-center">{label}:</span>
      <span className="ml-1 self-center">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...register}
        />
      </span>
    </div>
  )
}

export default Input

function Input({
  label = null,
  id,
  type,
  placeholder = null,
  disabled = false,
  register = null,
}) {
  return (
    <label className="mt-2 block first:mt-0">
      {label}
      <input
        className="block"
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
      />
    </label>
  )
}

export default Input

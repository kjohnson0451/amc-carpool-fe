function Input({
  label = null,
  id,
  type,
  placeholder = null,
  disabled = false,
  register = null,
}) {
  return (
    // This eslint rule seems to be busted
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
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

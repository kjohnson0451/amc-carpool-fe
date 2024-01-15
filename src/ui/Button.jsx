function Button({ type, onClick, className, disabled, children }) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
      className={`${className} cursor-pointer rounded-lg border border-[#615287] bg-[#171023] px-4 py-2 text-base font-medium transition duration-200 ease-in-out hover:bg-[#46456f] focus:outline-none active:translate-x-0.5 active:translate-y-0.5  disabled:cursor-not-allowed disabled:border-0 disabled:bg-gray-300 disabled:text-gray-800`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button

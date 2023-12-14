function LabelValuePair({ label, value }) {
  return (
    <div>
      {label && <p className="mr-3 inline-block font-semibold">{label}:</p>}
      <p className="inline-block">{value}</p>
    </div>
  )
}

export default LabelValuePair

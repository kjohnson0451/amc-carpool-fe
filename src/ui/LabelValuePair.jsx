function LabelValuePair({ label, value }) {
  return (
    <div className="flex items-center gap-1.5">
      {label && <span className="font-semibold">{label}:</span>}
      <span className="truncate">{value}</span>
    </div>
  )
}

export default LabelValuePair

function MainLayout({ header, children }) {
  return (
    <div>
      <h2>{header}</h2>
      {children}
    </div>
  )
}

export default MainLayout

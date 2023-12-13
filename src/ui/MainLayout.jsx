function MainLayout({ header, children }) {
  return (
    <>
      <h2>{header}</h2>
      <div>{children}</div>
    </>
  )
}

export default MainLayout

function MainLayout({ header, children }) {
  return (
    <>
      <h2>{header}</h2>
      <div className="border border-stone-600 bg-custom-gray-dark min-h-mainlayout max-[600px]:min-h-mainlayout-mobile">
        {children}
      </div>
    </>
  )
}

export default MainLayout

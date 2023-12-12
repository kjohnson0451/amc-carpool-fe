function MainLayout({ header, children }) {
  return (
    <>
      <h2>{header}</h2>
      <div className="border border-stone-600 rounded-md px-1 bg-mainlayout min-h-mainlayout max-[600px]:min-h-mainlayout-mobile">
        {children}
      </div>
    </>
  )
}

export default MainLayout

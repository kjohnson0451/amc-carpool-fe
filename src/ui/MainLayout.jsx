import { Link } from "react-router-dom"

// The "Main Layout" I use for the Trip List page (pages/Trips.jsx)
// and the Individual Trip page (pages/Trips.jsx)
//
// I can pass in a header and optionally the previous page.

function MainLayout({ header, previousPage = {}, children }) {
  const { label: previousPageLabel, to: previousPageTo } = previousPage

  return (
    <>
      <span className="link m-2 h-[19px]">
        {previousPageLabel && previousPageTo && (
          <Link to={previousPageTo}>⬅ Back to {previousPageLabel}</Link>
        )}
      </span>
      <h2 className="truncate">{header}</h2>
      <div>{children}</div>
    </>
  )
}

export default MainLayout

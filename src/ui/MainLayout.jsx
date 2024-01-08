import { Link } from "react-router-dom"

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

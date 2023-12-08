import { BrowserRouter, Routes, Route } from "react-router-dom"
import Trips from "./pages/Trips"
import PageNotFound from "./pages/PageNotFound"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Trips />} />
        <Route path="trips" element={<Trips />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Trips from "@pages/Trips"
import Trip from "@pages/Trip"
import PageNotFound from "@pages/PageNotFound"
import "./App.css"
import { Toaster } from "react-hot-toast"

// Create a React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
})

function App() {
  return (
    // Provide the React Query client to my app
    <QueryClientProvider client={queryClient}>
      {/* Declare my routes */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Trips />} />
          <Route path="trips" element={<Trips />} />
          <Route path="trips/:tripId" element={<Trip />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      {/* A Toast is a temporary notification. Declare my global Toast options here */}
      <Toaster
        position="top-center"
        gutter={12}
        containerStype={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: { fontSize: "16px", maxWidth: "500px", padding: "16px 24px" },
        }}
      />
    </QueryClientProvider>
  )
}

export default App

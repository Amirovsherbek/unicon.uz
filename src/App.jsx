import Dashboard from "./pages/dashboard/dashboard"
import { Route, Routes, } from "react-router-dom"
import UserPage from "./pages/user/users"
import { createContext } from "react"
import Error from "./pages/Error/error"
import Stop from "./pages/stop/Stop"
export const UseContext = createContext()
function App() {
  const BaseUrl = 'http://192.168.11.149:4500/api'
  return (
    <div className="container">
      <UseContext.Provider value={BaseUrl}>
        <Routes>
          <Route path="/" element={<Dashboard  />} />
          <Route path="/user" element={<UserPage  />} />
          <Route path="/stop" element={<Stop  />} />
          <Route path="*" element={<Error  />} />
        </Routes>
      </UseContext.Provider>
    </div>
  )
}
export default App
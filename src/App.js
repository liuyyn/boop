import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./AppRoutes"
import NavBar from "./components/NavBar"
import { AuthContextProvider } from "./context/AuthContent"

const App = () => (
  <>
    <Router>
      <AuthContextProvider>
        <NavBar />
        <AppRoutes />
      </AuthContextProvider>
    </Router>
  </>
)

export default App

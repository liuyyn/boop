import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./AppRoutes"
import NavBar from "./components/NavBar"

const App = () => (
  <>
    <Router>
      <NavBar />
      <AppRoutes />
    </Router>
  </>
)

export default App

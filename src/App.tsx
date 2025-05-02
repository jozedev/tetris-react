import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import HomePage from './pages/home'
import AboutPage from './pages/about'

function App () {
  return (
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App

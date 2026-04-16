import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WorkshopsPage from './pages/WorkshopsPage'
import ProfilePage from './pages/ProfilePage'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
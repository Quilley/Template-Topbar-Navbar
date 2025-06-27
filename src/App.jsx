import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import TopBar from './components/TopBar'
import CenteredNavbar from './components/CenteredNavbar'
import AdminBuild from './pages/AdminBuild'
import Insights from './pages/Insights'

function App() {
  return (
    <Router>
      <div className="app">
        <TopBar />
        <CenteredNavbar />
        <Routes>
          <Route path="/" element={<Navigate to="/admin-build" replace />} />
          <Route path="/admin-build" element={<AdminBuild />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

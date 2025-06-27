import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './theme'
import TopBar from './components/TopBar'
import CenteredNavbar from './components/CenteredNavbar'
import AdminBuild from './pages/AdminBuild'
import Insights from './pages/Insights'
import BuildPerformanceData from './pages/BuildPerformanceData'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <TopBar />
          <CenteredNavbar />
          <Routes>
            <Route path="/" element={<Navigate to="/admin-build" replace />} />
            <Route path="/admin-build" element={<AdminBuild />} />
            <Route path="/admin-build/build-data" element={<BuildPerformanceData />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

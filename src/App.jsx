import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './theme'
import TopBar from './components/TopBar'
import CenteredNavbar from './components/CenteredNavbar'
import Breadcrumb from './components/Breadcrumb'
import AdminBuild from './pages/AdminBuild'
import Insights from './pages/Insights'
import BuildPerformanceData from './pages/BuildPerformanceData'
import PIPManagement from './pages/PIPManagement'
import InsightsData from './pages/InsightsData'

// Component to handle conditional rendering of navbar or breadcrumbs
function NavigationComponent() {
  const location = useLocation()
  
  // Define breadcrumb configurations for different routes
  const getBreadcrumbItems = (pathname) => {
    switch (pathname) {
      case '/admin-build/build-data':
        return [
          { label: 'Home', path: '/admin-build' },
          { label: 'Admin Build', path: '/admin-build' },
          { label: 'Build Performance Data', path: null }
        ]
      case '/admin-build/pip-management':
        return [
          { label: 'Home', path: '/admin-build' },
          { label: 'Admin Build', path: '/admin-build' },
          { label: 'PIP Management', path: null }
        ]
      case '/insights/insights-data':
        return [
          { label: 'Home', path: '/admin-build' },
          { label: 'Insights', path: '/insights' },
          { label: 'Insights Data', path: null }
        ]
      default:
        return null
    }
  }

  const breadcrumbItems = getBreadcrumbItems(location.pathname)
  
  // Show breadcrumbs for nested routes, navbar for main routes
  if (breadcrumbItems) {
    return <Breadcrumb items={breadcrumbItems} />
  } else {
    return <CenteredNavbar />
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <TopBar />
          <NavigationComponent />
          <Routes>
            <Route path="/" element={<Navigate to="/admin-build" replace />} />
            <Route path="/admin-build" element={<AdminBuild />} />
            <Route path="/admin-build/build-data" element={<BuildPerformanceData />} />
            <Route path="/admin-build/pip-management" element={<PIPManagement />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/insights-data" element={<InsightsData />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

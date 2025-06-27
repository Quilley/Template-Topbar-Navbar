import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Box, Container, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { Build, Analytics } from '@mui/icons-material'

// Menu items configuration with routes and icons
const menuItems = [
  { name: 'Admin Build', path: '/admin-build', value: 'admin-build', icon: <Build /> },
  { name: 'Insights', path: '/insights', value: 'insights', icon: <Analytics /> }
]

/**
 * Centered toggle navigation component
 */
function CenteredNavbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedValue, setSelectedValue] = useState('admin-build')

  // Update selected value based on current location
  useEffect(() => {
    if (location.pathname.startsWith('/admin-build')) {
      setSelectedValue('admin-build')
    } else if (location.pathname.startsWith('/insights')) {
      setSelectedValue('insights')
    }
  }, [location.pathname])

  const handleToggleChange = (event, newValue) => {
    if (newValue !== null) {
      setSelectedValue(newValue)
      const selectedItem = menuItems.find(item => item.value === newValue)
      if (selectedItem) {
        navigate(selectedItem.path)
      }
    }
  }

  return (
    <Box 
      sx={{ 
        position: 'fixed',
        top: 80, // Position below the AppBar
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: 2,
        p: 1
      }}
    >
      <ToggleButtonGroup
        value={selectedValue}
        exclusive
        onChange={handleToggleChange}
        aria-label="navigation"
        size="small"
        sx={{
          '& .MuiToggleButton-root': {
            px: 3,
            py: 1.5,
            border: '1px solid',
            borderColor: 'primary.main',
            color: 'primary.main',
            fontSize: '14px',
            fontWeight: 500,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'primary.light',
              borderColor: 'primary.dark'
            },
            '&.Mui-selected': {
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.dark'
              }
            }
          }
        }}
      >
        {menuItems.map((item) => (
          <ToggleButton 
            key={item.value} 
            value={item.value} 
            aria-label={item.name.toLowerCase()}
          >
            {item.icon}
            <Box component="span" sx={{ ml: 1 }}>
              {item.name}
            </Box>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  )
}

export default CenteredNavbar

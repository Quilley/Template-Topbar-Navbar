import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Box, Button, Menu, MenuItem, Container } from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'

// Menu items configuration with routes
const menuItems = [
  { name: 'Admin Build', path: '/admin-build' },
  { name: 'Insights', path: '/insights' }
]

/**
 * Centered navigation component
 */
function CenteredNavbar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()
  const open = Boolean(anchorEl)

  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  const handleMenuItemClick = (item) => {
    navigate(item.path)
    handleClose()
  }

  // Get current page name based on location
  const currentPage = menuItems.find(item => item.path === location.pathname)?.name || 'Admin Build'

  return (
    <Container maxWidth="lg">
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          py: 3,
          mt: 8 // Account for fixed AppBar
        }}
      >
        <Button
          variant="outlined"
          onClick={handleClick}
          endIcon={<KeyboardArrowDown />}
          sx={{ 
            textTransform: 'none',
            minWidth: 200,
            borderRadius: 2,
            px: 3,
            py: 1.5,
            fontSize: '16px',
            fontWeight: 500,
            borderColor: 'primary.main',
            '&:hover': { 
              backgroundColor: 'primary.light',
              borderColor: 'primary.dark'
            }
          }}
        >
          {currentPage}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          sx={{
            '& .MuiMenuItem-root': {
              justifyContent: 'center',
              textAlign: 'center',
              minWidth: 200,
              py: 1.5
            }
          }}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.name} onClick={() => handleMenuItemClick(item)}>
              {item.name}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Container>
  )
}

export default CenteredNavbar

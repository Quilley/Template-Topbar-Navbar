import { AppBar, Toolbar, Box, Avatar, IconButton, Typography } from '@mui/material'

/**
 * User avatar component
 */
const UserAvatar = () => (
  <IconButton size="large" edge="end" color="inherit" sx={{ ml: 2 }}>
    <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main', fontSize: '14px' }}>
      JD
    </Avatar>
  </IconButton>
)

/**
 * Clean TopBar component with left-aligned title and user avatar
 */
function TopBar() {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            fontWeight: 'bold',
            textAlign: 'left'
          }}
        >
          People Performance Portal
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <UserAvatar />
      </Toolbar>
    </AppBar>
  )
}

export default TopBar

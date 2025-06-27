import { Box, Typography } from '@mui/material'

/**
 * Admin Build page component
 */
function AdminBuild() {
  return (
    <Box 
      sx={{ 
        padding: 3,
        textAlign: 'center'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Build
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This is the Admin Build page. Content coming soon...
      </Typography>
    </Box>
  )
}

export default AdminBuild

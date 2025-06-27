import { Box, Typography } from '@mui/material'

/**
 * Insights page component
 */
function Insights() {
  return (
    <Box 
      sx={{ 
        padding: 3,
        textAlign: 'center'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Insights
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This is the Insights page. Analytics and reports will be displayed here.
      </Typography>
    </Box>
  )
}

export default Insights

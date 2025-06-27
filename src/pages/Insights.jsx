import { Box, Typography, Container } from '@mui/material'

/**
 * Insights page component with centered layout and optimized typography
 */
function Insights() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: 8, // Account for fixed AppBar
        pb: 4
      }}
    >
      <Container maxWidth="sm">
        <Box 
          sx={{ 
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Insights
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              fontWeight: 400,
              lineHeight: 1.5
            }}
          >
            This is the Insights page. Analytics and reports will be displayed here.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Insights

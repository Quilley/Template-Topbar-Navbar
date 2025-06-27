import { Box, Typography, Container } from '@mui/material'

/**
 * Insights Data page component
 */
function InsightsData() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: 23, // Account for fixed AppBar and breadcrumb
        pb: 6
      }}
    >
      <Container maxWidth="md">
        <Box 
          sx={{ 
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            color="primary"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              mb: 4
            }}
          >
            Insights Data
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            View comprehensive analytics and performance reports
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default InsightsData

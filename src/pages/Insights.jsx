import { Box, Typography, Card, CardContent, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'

/**
 * Insights page component with centered layout and optimized typography
 */
function Insights() {
  const navigate = useNavigate()

  const handleInsightsDataClick = () => {
    navigate('/insights/insights-data')
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        pt: 23, // Account for fixed AppBar and navbar with extra gap
        pb: 6
      }}
    >
      <Container maxWidth="xs"> {/* Reduced from "sm" to "xs" for 30% width reduction */}
        <Box 
          sx={{ 
            textAlign: 'center'
          }}
        >
          {/* Centered Stacked Cards */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* First Card */}
            <Card 
              onClick={handleInsightsDataClick}
              sx={{ 
                width: '100%',
                boxShadow: 4,
                borderRadius: 3,
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: 8,
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease-in-out'
                }
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography 
                  variant="h5" 
                  component="h2" 
                  gutterBottom 
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' }
                  }}
                >
                  Insights Data
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    lineHeight: 1.6
                  }}
                >
                  View analytics and performance reports
                </Typography>
              </CardContent>
            </Card>

            {/* Second Card */}
            <Card 
              sx={{ 
                width: '100%',
                boxShadow: 4,
                borderRadius: 3,
                '&:hover': {
                  boxShadow: 8,
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease-in-out'
                }
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography 
                  variant="h5" 
                  component="h2" 
                  gutterBottom 
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' }
                  }}
                >
                  Reports Management
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    lineHeight: 1.6
                  }}
                >
                  Generate and manage business reports
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Insights

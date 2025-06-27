import { Box, Typography, Card, CardContent, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'

/**
 * Admin Build page component with centered layout and optimized typography
 */
function AdminBuild() {
  const navigate = useNavigate()

  const handleBuildDataClick = () => {
    navigate('/admin-build/build-data')
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
      <Container maxWidth="sm">
        <Box 
          sx={{ 
            textAlign: 'center'
          }}
        >
          {/* Centered Stacked Cards */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* First Card */}
            <Card 
              onClick={handleBuildDataClick}
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
                  Build Performance Data
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    lineHeight: 1.6
                  }}
                >
                  Set up the entire dashboard
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
                  PIP Management
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    lineHeight: 1.6
                  }}
                >
                  Monitor People performance
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default AdminBuild

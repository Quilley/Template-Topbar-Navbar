import { useState } from 'react'
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Container, 
  Button, 
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid
} from '@mui/material'
import { CloudUpload } from '@mui/icons-material'

/**
 * Build Performance Data page component
 */
function BuildPerformanceData() {
  // State for sliders
  const [sliderValues, setSliderValues] = useState({
    BL: 50,
    K12: 50,
    LAP: 50,
    HPS: 50
  })

  // State for dropdowns
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedYear, setSelectedYear] = useState('')

  const handleSliderChange = (name) => (event, newValue) => {
    setSliderValues(prev => ({
      ...prev,
      [name]: newValue
    }))
  }

  const handleFileUpload = () => {
    // Handle file upload logic here
    console.log('File upload clicked')
  }

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i)

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 140px)', // Account for AppBar and navbar
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: 16, // Account for fixed AppBar and navbar
        pb: 4
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 6,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Build Performance Data
          </Typography>

          {/* Cards Stack */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            
            {/* Upload Card */}
            <Card 
              sx={{ 
                width: '100%',
                boxShadow: 4,
                borderRadius: 3,
                '&:hover': {
                  boxShadow: 6,
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
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    mb: 3
                  }}
                >
                  Upload
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<CloudUpload />}
                  onClick={handleFileUpload}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    textTransform: 'none',
                    borderRadius: 2
                  }}
                >
                  Upload Base File
                </Button>
              </CardContent>
            </Card>

            {/* Cutoff Card */}
            <Card 
              sx={{ 
                width: '100%',
                boxShadow: 4,
                borderRadius: 3,
                '&:hover': {
                  boxShadow: 6,
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
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    mb: 4
                  }}
                >
                  Cutoff
                </Typography>
                
                {/* Sliders */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {Object.entries(sliderValues).map(([name, value]) => (
                    <Box key={name} sx={{ width: '100%' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            minWidth: 60, 
                            fontWeight: 500,
                            fontSize: '1.1rem'
                          }}
                        >
                          {name}
                        </Typography>
                        <Box sx={{ flex: 1, mx: 3 }}>
                          <Slider
                            value={value}
                            onChange={handleSliderChange(name)}
                            min={0}
                            max={100}
                            valueLabelDisplay="auto"
                            valueLabelFormat={(value) => `${value}%`}
                            sx={{
                              '& .MuiSlider-thumb': {
                                width: 20,
                                height: 20,
                              },
                              '& .MuiSlider-track': {
                                height: 6,
                              },
                              '& .MuiSlider-rail': {
                                height: 6,
                              }
                            }}
                          />
                        </Box>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            minWidth: 50, 
                            textAlign: 'right',
                            fontWeight: 500
                          }}
                        >
                          {value}%
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>

            {/* For Month Card */}
            <Card 
              sx={{ 
                width: '100%',
                boxShadow: 4,
                borderRadius: 3,
                '&:hover': {
                  boxShadow: 6,
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
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    mb: 3
                  }}
                >
                  For Month
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Month</InputLabel>
                      <Select
                        value={selectedMonth}
                        label="Month"
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        sx={{ borderRadius: 2 }}
                      >
                        {months.map((month) => (
                          <MenuItem key={month} value={month}>
                            {month}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Year</InputLabel>
                      <Select
                        value={selectedYear}
                        label="Year"
                        onChange={(e) => setSelectedYear(e.target.value)}
                        sx={{ borderRadius: 2 }}
                      >
                        {years.map((year) => (
                          <MenuItem key={year} value={year}>
                            {year}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default BuildPerformanceData

import { Box, Breadcrumbs, Typography, Link, Card } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Home, ChevronRight } from '@mui/icons-material'

/**
 * Breadcrumb component for navigation
 * @param {Array} items - Array of breadcrumb items with { label, path } structure
 */
function Breadcrumb({ items }) {
  const navigate = useNavigate()

  const handleClick = (path) => {
    if (path) {
      navigate(path)
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
        minWidth: '400px',
        maxWidth: '600px'
      }}
    >
      <Card 
        sx={{ 
          backgroundColor: 'background.paper',
          borderRadius: 2,
          boxShadow: 2,
          p: 2
        }}
      >
        <Breadcrumbs 
          separator={<ChevronRight fontSize="small" />}
          aria-label="breadcrumb"
          sx={{
            '& .MuiBreadcrumbs-ol': {
              justifyContent: 'center',
              flexWrap: 'wrap'
            }
          }}
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            
            if (isLast) {
              return (
                <Typography 
                  key={index}
                  color="text.primary"
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5
                  }}
                >
                  {index === 0 && <Home fontSize="small" />}
                  {item.label}
                </Typography>
              )
            }

            return (
              <Link
                key={index}
                component="button"
                variant="body2"
                onClick={() => handleClick(item.path)}
                sx={{
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'primary.main',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  border: 'none',
                  background: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: 'primary.dark'
                  }
                }}
              >
                {index === 0 && <Home fontSize="small" />}
                {item.label}
              </Link>
            )
          })}
        </Breadcrumbs>
      </Card>
    </Box>
  )
}

export default Breadcrumb

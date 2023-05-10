import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Replace this with your primary color
    },
    secondary: {
      main: '#dc004e', // Replace this with your secondary color
    },
    background: {
      default: '#f5f5f5', // Replace this with your background color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      textTransform: 'none',
    },
  },
})

export default theme

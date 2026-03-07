import { ThemeProvider } from '@mui/material/styles'
import './App.scss'
import { Header } from './components/Header'
import { Keyboard } from './components/Keyboard'
import { BottomTabs } from './components/BottomTabs'
import { BaseContextProvider } from './contexts/BaseContext'
import theme from './lib/theme'
import { Box } from '@mui/material'

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <BaseContextProvider>
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
            <Header />
            <Keyboard />
            <BottomTabs sx={{ flex: 1, minHeight: 0 }} />
          </Box>
        </BaseContextProvider>
      </ThemeProvider>
    </div>
  )
}

export default App

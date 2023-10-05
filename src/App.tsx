import { ThemeProvider } from '@mui/material/styles'
import './App.scss'
import { Header } from './components/Header'
import { InfoArea } from './components/InfoArea'
import { Keyboard } from './components/Keyboard'
import { BaseContextProvider } from './contexts/baseContext'
import theme from './lib/theme'
import { Grid } from '@mui/material'

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <BaseContextProvider>
          <Grid container spacing={2}>
            <Grid item>
              <Header />
            </Grid>
            <Grid item>
              <Keyboard />
            </Grid>
            <Grid item>
              <InfoArea />
            </Grid>
          </Grid>
        </BaseContextProvider>
      </ThemeProvider>
    </div>
  )
}

export default App

import { ThemeProvider } from '@mui/material/styles'
import './App.scss'
import { Header } from './components/Header'
import { InfoArea } from './components/InfoArea'
import { Keyboard } from './components/Keyboard'
import { CustomMappings } from './components/CustomMappings'
import { TextObjects } from './components/TextObjects'
import { KeyOfTheDay } from './components/KeyOfTheDay'
import { ProgressPanel } from './components/ProgressPanel'
import { BaseContextProvider } from './contexts/BaseContext'
import theme from './lib/theme'
import { Grid } from '@mui/material'

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <BaseContextProvider>
          <Grid container spacing={0}>
            <Grid container item>
              <KeyOfTheDay />
            </Grid>
            <Grid container item>
              <Header />
            </Grid>
            <Grid container item>
              <Keyboard />
            </Grid>
            <Grid container item>
              <InfoArea />
            </Grid>
            <Grid container item>
              <CustomMappings />
            </Grid>
            <Grid container item>
              <TextObjects />
            </Grid>
            <Grid container item>
              <ProgressPanel />
            </Grid>
          </Grid>
        </BaseContextProvider>
      </ThemeProvider>
    </div>
  )
}

export default App

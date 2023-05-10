import { ThemeProvider } from '@mui/material/styles'
import './App.scss'
import { Header } from './components/Header'
import { InfoArea } from './components/InfoArea'
import { Keyboard } from './components/Keyboard'
import { BaseContextProvider } from './contexts/baseContext'
import theme from './lib/theme'

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <BaseContextProvider>
          <Header />
          <Keyboard />
          <InfoArea />
        </BaseContextProvider>
      </ThemeProvider>
    </div>
  )
}

export default App

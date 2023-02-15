import './App.scss'
import { Header } from './components/Header'
import { InfoArea } from './components/InfoArea'
import { Keyboard } from './components/Keyboard'
import { BaseContextProvider } from './contexts/baseContext'

function App() {
  return (
    <div className='App'>
      <BaseContextProvider>
        <Header />
        <Keyboard />
        <InfoArea />
      </BaseContextProvider>
    </div>
  )
}

export default App

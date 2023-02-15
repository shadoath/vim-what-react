import './App.scss'
import { Header } from './components/Header'
import { Keyboard } from './components/Keyboard'
import { BaseContextProvider } from './contexts/baseContext'

function App() {
  return (
    <div className='App'>
      <BaseContextProvider>
        <Header />
        <Keyboard />
      </BaseContextProvider>
    </div>
  )
}

export default App

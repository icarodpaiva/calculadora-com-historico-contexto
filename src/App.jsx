import './App.css'
import Calculadora from './components/Calculadora'
import Historico from './components/Historico'

import { TelaProvider } from './contexts/TelaContext'

function App() {
  return (
    <TelaProvider>
      <div className="App flex">
        <Calculadora />
        <Historico />
      </div>
    </TelaProvider>
  )
}

export default App

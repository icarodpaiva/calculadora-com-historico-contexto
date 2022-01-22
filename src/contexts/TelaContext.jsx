import { createContext, useContext, useReducer } from 'react'
import TelaReducer from '../reducers/TelaReducer'
import HistoricoReducer from '../reducers/HistoricoReducer'

const TelaContext = createContext()

const initialState = {
  tela: TelaReducer(),
  historico: HistoricoReducer()
}

const MainReducer = (state, action) => ({
  tela: TelaReducer(state.tela, action),
  historico: HistoricoReducer(state.historico, action)
})

export const TelaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, initialState)

  return (
    <TelaContext.Provider value={[state, dispatch]}>
      {children}
    </TelaContext.Provider>
  )
}

export const useTelaValue = () => useContext(TelaContext)

import { useTelaValue } from '../contexts/TelaContext'

const Botao = ({ botao }) => {
  const [state, dispatch] = useTelaValue()

  const handleClick = e => {
    switch (e.target.innerText) {
      case 'C':
        return dispatch({ type: 'RESET' })
      case '=':
        dispatch({
          type: 'ADDHISTORICO',
          payload: { historico: state.tela }
        })
        return dispatch({ type: 'RESULT' })
      default:
        return dispatch({
          type: 'ADD',
          payload: { button: e.target.innerText }
        })
    }
  }

  return <button onClick={handleClick}>{botao}</button>
}

export default Botao

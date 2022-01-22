import { useTelaValue } from '../contexts/TelaContext'

const Tela = () => {
  const [state, dispatch] = useTelaValue()
  return (
    <div>
      <p>{state.tela}</p>
    </div>
  )
}

export default Tela

import { useTelaValue } from '../contexts/TelaContext'

const Historico = () => {
  const [state, dispatch] = useTelaValue()

  return (
    <div>
      {state.historico.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )
}

export default Historico

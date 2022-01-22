import Tela from './Tela'
import Botao from './Botao'

const Calculadora = () => {
  return (
    <div className="calculadora flex column">
      <div className="tela flex">
        <Tela />
      </div>
      <div className="botoes flex">
        <Botao botao={'C'} />
        <Botao botao={'/'} />
        <Botao botao={'*'} />
        <Botao botao={'-'} />
        <Botao botao={7} />
        <Botao botao={8} />
        <Botao botao={9} />
        <Botao botao={'+'} />
        <Botao botao={4} />
        <Botao botao={5} />
        <Botao botao={6} />
        <Botao botao={'='} />
        <Botao botao={1} />
        <Botao botao={2} />
        <Botao botao={3} />
        <Botao botao={0} />
      </div>
    </div>
  )
}

export default Calculadora

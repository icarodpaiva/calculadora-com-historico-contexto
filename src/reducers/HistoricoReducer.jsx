const initialState = []

const HistoricoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADDHISTORICO':
      const newState = state
      newState.push(action.payload.historico)
  }

  return state
}

export default HistoricoReducer

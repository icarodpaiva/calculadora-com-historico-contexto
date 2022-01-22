const initialState = ''

const TelaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD':
      return (state += action.payload.button)
    case 'RESET':
      return (state = initialState)
    case 'RESULT':
      try {
        return eval(state)
      } catch {
        return
      }
  }
  return state
}

export default TelaReducer

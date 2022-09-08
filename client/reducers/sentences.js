import { ADD_SENTENCE } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_SENTENCE:
      return payload
    default:
      return state
  }
}

export default reducer

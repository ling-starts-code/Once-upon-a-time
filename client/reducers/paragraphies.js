import { GET_ALL_POSTS } from '../actions'

const initialState = []

// -----------------STEP 5----------------------- runs the reducer functions and checks the type ADD_SENTENCE and returns that payload to addSentence in STEP 3 and then back into the Sentence.jsx
const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_ALL_POSTS:
      return payload
    default:
      return state
  }
}

export default reducer

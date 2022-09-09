import { ADD_SENTENCE, DELETE_SENTENCES } from '../actions'

const initialState = { sentence: { post: 'Once upon a time...' } }

// -----------------STEP 5----------------------- runs the reducer functions and checks the type ADD_SENTENCE and returns that payload to addSentence in STEP 3 and then back into the Sentence.jsx
const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_SENTENCE:
      return payload
    case DELETE_SENTENCES:
      return initialState
    default:
      return state
  }
}

export default reducer

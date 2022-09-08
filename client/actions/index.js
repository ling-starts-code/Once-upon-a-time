import { saveSentences } from '../apis/apiClient'

export const ADD_SENTENCE = 'ADD_SENTENCE'

// -----------------STEP 4----------------------- returns the type and payload with the para (sentence) then moves over to reducers/index.js then to reducers/sentences --{REDUCERS}--
export function addSentence(para) {
  return {
    type: ADD_SENTENCE,
    payload: para,
  }
}

// -----------------STEP 3----------------------- Runs the function from dispatch in Sentence.jsx passing through the sentence usestate. Returns saveSentence function then goes into api/apiClient.js --{API CLIENT}--

// through dispatch then passes the para (the sentence) through to another dispatch function and passing through the addSentence with the para (sentence)
export function sendSentence(sentence) {
  return (dispatch) => {
    return saveSentences(sentence).then((para) => {
      dispatch(addSentence(para))
    })
  }
}

import { saveSentences } from '../apis/apiClient'

export const ADD_SENTENCE = 'ADD_SENTENCE'

//add sentence
export function addSentence(para) {
  return {
    type: ADD_SENTENCE,
    payload: para,
  }
}

export function sendSentence(sentence) {
  return (dispatch) => {
    return saveSentences(sentence).then((para) => {
      dispatch(addSentence(para))
    })
  }
}

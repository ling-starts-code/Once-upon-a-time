import {
  saveSentences,
  deleteAllSentences,
  getAllSentences,
} from '../apis/apiClient'

export const ADD_SENTENCE = 'ADD_SENTENCE'
export const DELETE_SENTENCES = 'DELETE_SENTENCES'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'

// -----------------STEP 4----------------------- returns the type and payload with the para (sentence) then moves over to reducers/index.js then to reducers/sentences --{REDUCERS}--
export function addSentence(para) {
  return {
    type: ADD_SENTENCE,
    payload: para,
  }
}

export function deleteSentences() {
  return {
    type: DELETE_SENTENCES,
  }
}

//Example from fruits
// export function getFruits() {
//   return request
//     .get(`${rootUrl}/fruits`)
//     .then((res) => res.body.fruits)
//     .catch(logError)
// }
// -----------------STEP 3----------------------- Runs the function from dispatch in Sentence.jsx passing through the sentence usestate. Returns saveSentence function then goes into api/apiClient.js --{API CLIENT}--

// through dispatch then passes the para (the sentence) through to another dispatch function and passing through the addSentence with the para (sentence)
export function sendSentence(sentence) {
  return (dispatch) => {
    return saveSentences(sentence).then((para) => {
      dispatch(addSentence(para))
    })
  }
}

export function deleteAll() {
  return (dispatch) => {
    return deleteAllSentences().then(() => {
      dispatch(deleteSentences())
    })
  }
}
export function getAllPosts(sentences) {
  return {
    type: GET_ALL_POSTS,
    payload: sentences,
  }
}
export function getAll() {
  return (dispatch) => {
    return getAllSentences().then((sentences) => {
      dispatch(getAllPosts(sentences))
    })
  }
}

import request from 'superagent'

const rootUrl = '/api/v1'

// -----------------STEP 3a-----------------------post the sentence through the back end then returns it in a res.body

export function saveSentences(sentence) {
  console.log('api', sentence)
  return request
    .post(rootUrl + '/sentence')
    .send({ sentence })
    .then((res) => {
      console.log(res.body)
      return res.body
    })
}

import request from 'superagent'

const rootUrl = '/api/v1'

export function saveSentences(sentence) {
  console.log('api', sentence)
  return request
    .post(rootUrl + '/sentence')
    .send({ sentence })
    .then((res) => {
      return res.body
    })
}

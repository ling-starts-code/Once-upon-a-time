import request from 'superagent'

const rootUrl = '/api/v1'

// -----------------STEP 3a-----------------------post the sentence through the back end then returns it in a res.body

export function saveSentences(post) {
  console.log('api', post)
  return request
    .post(rootUrl + '/posts')
    .send({ post })
    .then((res) => {
      console.log(res.body)
      return res.body
    })
}

export function deleteAllSentences() {
  return request.delete(rootUrl + '/posts').then((res) => {
    console.log('delete', res.body)
    return res.body
  })
}

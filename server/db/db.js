const connection = require('./connection')

function addSentence(sentence, db = connection) {
  return db('post').insert(sentence)
}

module.exports = {
  addSentence,
}

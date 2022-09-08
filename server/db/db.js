const connection = require('./connection')

function addSentence(sentence, db = connection) {
  return db('posts').insert(sentence)
}

module.exports = {
  addSentence,
}

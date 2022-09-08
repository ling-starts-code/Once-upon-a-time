const connection = require('./connection')

function addSentence(sentence, db = connection) {
  return db('post').insert(sentence)
}

function getAllSentence(db = connection) {
  return db('post').select()
}

function deleteAllSentences(db = connection) {
  return db('post').del()
}

module.exports = {
  addSentence,
  getAllSentence,
  deleteAllSentences,
}

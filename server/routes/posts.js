const express = require('express')
// const { useParams } = require('react-router-dom')

const db = require('../db/db')

const router = express.Router()

router.post('/', (req, res) => {
  const sentence = req.body
  db.addSentence(sentence)
    .then(() => {
      res.json({ sentence })
      // res.json({ fruits: results.map((fruit) => fruit.name) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/', (req, res) => {
  db.getAllSentence()
    .then((result) => {
      console.log('result', result)
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.delete('/', (req, res) => {
  // const sentences = req.body

  db.deleteAllSentences()
    .then(() => {
      res.json()
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router

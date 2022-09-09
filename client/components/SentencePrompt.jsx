import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function SentencePrompt() {
  //Stretch: update once upon a time to an api writing prompt
  const [prompt, setPrompt] = useState('Once upon a time')
  const arr = useSelector((state) => state.sentences)
  console.log('I am a pirate', arr)

  //updates state after 'arr' is changed/input entered
  useEffect(() => {
    grabSentenceFromPost()
  }, [arr])

  function grabSentenceFromPost() {
    console.log('sentence post functioning')

    const words = arr.sentence.post.split(' ')

    words.splice(0, words.length - 5)
    let wordPrompt = words.join(' ')
    setPrompt(wordPrompt)
  }

  return <div>{prompt}</div>
}

export default SentencePrompt

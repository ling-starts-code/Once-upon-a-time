import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendSentence } from '../actions'

function Sentence() {
  const [sentence, setSentence] = useState('')
  const dispatch = useDispatch()

  function handleClick() {
    console.log('handle clicked')
    dispatch(sendSentence(sentence))

    //send data and addfunction to fetch last string of post}
  }
  function handleChange(e) {
    const value = e.target.value
    setSentence(value) // spread (...) allows us to keep all the data that was there, but update/over-write the part that has changed.
  }

  return (
    <div>
      <form action="submit">
        <label htmlFor="name">Once upos a time...</label>

        <input id="name" onChange={handleChange} value={sentence} name="name" />
      </form>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Sentence

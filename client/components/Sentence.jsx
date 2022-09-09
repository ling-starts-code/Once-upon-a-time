import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendSentence, deleteAll } from '../actions'

function Sentence() {
  const [sentence, setSentence] = useState('')
  // const fruits = useSelector((state) => state.sentence)
  const [showStory, setShowstory] = useState(false)
  // --------------------STEP 1--------------------declaring dispatch function
  const dispatch = useDispatch()

  // const

  function handleClick(event) {
    console.log('handle clicked')
    event.preventDefault()
    dispatch(sendSentence(sentence))
    setSentence('')
    // ---------------------STEP 2------------------- running the dispatch function with sendSentence passing through useState sentence. sendSentence is in actions/index.js --{ACTIONS}--

    //send data and addfunction to fetch last string of post}
  }

  function handleDelete(event) {
    console.log('handle clicked')
    event.preventDefault()
    dispatch(deleteAll())
    setShowstory(false)
  }

  function handleChange(e) {
    const value = e.target.value
    setSentence(value) // spread (...) allows us to keep all the data that was there, but update/over-write the part that has changed.
  }

  return (
    <div>
      <form action="submit">
        {!showStory && (
          <>
            <label htmlFor="name"> </label>

            <input
              id="name"
              onChange={handleChange}
              value={sentence}
              name="name"
              onKeyPress={(e) => {
                e.key === 'Enter' && handleClick
              }}
            />
            <button onClick={handleClick}>Submit</button>
          </>
        )}
        {!showStory && (
          <button
            onClick={(e) => {
              e.preventDefault()
              setShowstory(true)
            }}
          >
            Read Story
          </button>
        )}
        {showStory && <button onClick={handleDelete}>Start Again</button>}
      </form>
    </div>
  )
}

export default Sentence

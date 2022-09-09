import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import { fetchFruits } from '../actions'
import Sentence from './Sentence'
import SentencePrompt from './SentencePrompt'

function App() {
  // const fruits = useSelector((state) => state.fruits)
  // const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(fetchFruits())
  }, [])

  //receiving the sentence

  return (
    <>
      <div className="app">
        <h1>A Fairytale - with Fruits!</h1>
        <ul>
          {/* {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))} */}
        </ul>
        <SentencePrompt />
        <Sentence />
      </div>
    </>
  )
}

export default App

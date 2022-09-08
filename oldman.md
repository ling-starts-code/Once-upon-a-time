import React, {  useState } from 'react'
// import { useDispatch } from 'react-redux'

// import { fetchFruits } from '../actions'

function App() {
  // const fruits = useSelector((state) => state.fruits)
  const [sentence, setSentence] = useState('')

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchFruits())
  // }, [])

  function handleClick() {
    console.log('handle clicked')
    //send data and addfunction to fetch last string of post}
  }
  function handleChange(e) {
    const value = e.target.value
    setSentence(value) // spread (...) allows us to keep all the data that was there, but update/over-write the part that has changed.
  }

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {/* <form action="submit">
            <label htmlFor="name">Once upon a time...</label>

            <input
              id="name"
              onChange={handleChange}
              value={sentence}
              name="name"
            />
          </form> */}
          <button onClick={handleClick}>Submit</button>
        </ul>
      </div>
    </>
  )
}

export default App

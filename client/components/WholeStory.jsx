import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SayButton } from 'react-say'

function WholeStory() {
  const arr = useSelector((state) => state.paragraphies)
  console.log(arr)

  return (
    <>
      {arr.map((item) => {
        return (
          <>
            <SayButton
              key={item.id}
              onClick={(event) => console.log(event)}
              speak={item.post}
            >
              {/* <p key={item.id}>{item.post}</p> */}
            </SayButton>
          </>
        )
      })}
      Tell me a story
    </>
  )
}
export default WholeStory

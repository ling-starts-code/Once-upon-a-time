import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SayButton, Say } from 'react-say'

function WholeStory() {
  const arr = useSelector((state) => state.paragraphies)
  console.log('arr on line 7 ', arr)

  const story = arr.reduce((item, current) => {
    console.log('current post: ', current.post)
    return item + ' ' + current.post
  }, '')

  console.log('line 13 story ', story)
  return (
    <>
      <div>
        {arr.map((item) => {
          return <p key={item.id}>{item.post}</p>
        })}
        {/* <Say speak={story} /> */}

        {story && (
          <SayButton onClick={(event) => console.log(event)} speak={story}>
            Read Me
          </SayButton>
        )}
      </div>
    </>
  )
}
export default WholeStory

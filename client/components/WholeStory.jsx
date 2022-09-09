import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function WholeStory() {
  const arr = useSelector((state) => state.paragraphies)
  console.log(arr)

  return (
    <>
      {arr.map((item) => {
        return <p key={item.id}>{item.post}</p>
      })}
    </>
  )
}
export default WholeStory

import React, { useState } from 'react'
import Inc from './Inc'
import Dec from './Dec'
import Reset from './Reset'

const App = () => {
  let [count, setCount] = useState(0)

  let inc = ()=>{
    setCount(count+1)
  }
  let dec = ()=>{
    setCount(count-1)
  }
  let reset = ()=>{
    setCount(0)
  }
  return (
    <div>
      <h1>count:{count}</h1>
      <Inc inc={inc}></Inc>
      <Dec dec={dec}></Dec>
      <Reset reset={reset}></Reset>
    </div>
  )
}

export default App

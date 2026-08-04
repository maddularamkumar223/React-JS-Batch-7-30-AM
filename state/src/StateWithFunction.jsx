import React from 'react'

const StateWithFunction = () => {
  //   let stateData = React.useState()
  //   console.log(stateData)
  let [count, setCount] = React.useState(0)
  let [userName, setUserName] = React.useState('')
  console.log(count)
  console.log(setCount)
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>INC</button>
      <button onClick={() => setCount(count - 1)}>DEC</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      <h1>Hello!{userName}</h1>
      <button onClick={() => setUserName('Ram')}>Display Name</button>
    </div>
  )
}

export default StateWithFunction

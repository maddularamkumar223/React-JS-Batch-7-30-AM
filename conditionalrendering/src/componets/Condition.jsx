import React, { useState } from 'react'

const Condition = () => {
  let [theme, setTheme] = useState(false)

  let handleTheme = () => {
    if (!theme) {
      return 'Light'
    } else {
      return 'Dark'
    }
  }

  console.log(theme)
  return (
    <div>
      <button>{handleTheme()}</button>
      <button
        onClick={() => {
          setTheme(!theme)
        }}
      >
        {theme ? 'Dark' : 'Light'}
      </button>

      <h1>{theme && 'This is a Dark Theme'}</h1>
    </div>
  )
}

export default Condition

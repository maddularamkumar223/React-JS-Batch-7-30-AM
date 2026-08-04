import React from 'react'

const Inc = ({ inc }) => {
  return (
    <div>
      <button onClick={() => inc()}>Inc </button>
    </div>
  )
}

export default Inc

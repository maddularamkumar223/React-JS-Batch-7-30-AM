import React from 'react'

const FunctionProps = ({ name, age, demo, names }) => {
  return (
    <div>
      <p>
        My name is {name} and the age is {age}
      </p>
      <p>{demo()}</p>

      <article>
        {names.map(name => {
          return <p>{name}</p>
        })}
      </article>
    </div>
  )
}

export default FunctionProps

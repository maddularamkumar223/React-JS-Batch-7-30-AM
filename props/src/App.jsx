import React from 'react'
import ClassProps from './ClassProps'
import FunctionProps from './FunctionProps'

const App = () => {
    let names = ["ram", "ravi", "siri", "raghu", "teja"]
    return (
        <div>
            {/* <ClassProps name="Ram" />
            <ClassProps name="Ravi"/>
            <ClassProps name="Siri"/> */}
            {/* <FunctionProps /> */}

            {/* {
                names.map(name => {
                    return <ClassProps name={name} />
                })
            } */}

            <ClassProps name="Ram" age={22} names={names}/>
        </div>
    )
}

export default App

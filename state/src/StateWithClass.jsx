import React, { Component } from 'react'

export default class StateWithClass extends Component {
  constructor () {
    super()
    this.state = {
      count: 0,
      name: ''
    }
  }
  render () {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 })
          }}
        >
          Inc
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 })
          }}
        >
          DEC
        </button>
        <button
          onClick={() => {
            this.setState({ count: 0 })
          }}
        >
          Reset
        </button>

        <h1>Hello!{this.state.name}</h1>
        <button
          onClick={() => {
            this.setState({ name: 'Ram' })
          }}
        >
          Change Name
        </button>
        <button
          onClick={() => {
            this.setState({ name: 'Ravi' })
          }}
        >
          Change Name1
        </button>
      </div>
    )
  }
}

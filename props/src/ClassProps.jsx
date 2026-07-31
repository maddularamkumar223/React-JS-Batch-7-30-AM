import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Hello!{this.props.name}</h1>
                <p>My age is {this.props.age}</p>

                <article>
                    {
                        this.props.names.map(name => {
                            return <p>{name}</p>
                        })
                    }
                </article>
            </div>
        )
    }
}

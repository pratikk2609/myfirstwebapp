import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
    }

    clickhandler() {
        this.setstate({
            message: 'Goodbye!'
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickhandler.bind(this)}>Click</button>
            </div>
        )
    }
}

export default EventBind

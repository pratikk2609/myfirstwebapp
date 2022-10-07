import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            message: "hello"
        }
    };

    handleButtonClick = (event) => {

        this.setState({ count: 2 })
        this.setState({ message: "bye" })
        //console.log(event);
    }

    render() {
        console.log(this.state.count);

        return (
            <div>
                <div>{this.state.message}</div>
                <button type="button" class="btn btn-primary m-3"
                    onClick={() => { this.handleButtonClick() }}>Generate Code</button>
            </div>
        );
    }
    // constructor(props) {
    //     super(props)
    //     //this.onClick = this.onClick.bind(this)
    //     this.clickhandler = this.clickhandler.bind(this);

    //     this.state = {
    //         message: 'Hello'
    //     }
    // }

    // clickhandler() {
    //     this.setstate({
    //         message: 'Goodbye!'
    //     })
    //     console.log("pravin")
    // }

    // render() {
    //     return (
    //         <div>
    //             <div>{this.state.message}</div>
    //             <button onClick={()=>{this.clickhandler()}}>Click</button>
    //         </div>
    //     )
    // }
}

export default EventBind

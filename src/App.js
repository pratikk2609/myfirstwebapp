import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
class App extends Component {
  render(){
    return(
      <div classname ="App">
        <Message />
        {/* < Greet name="Dnyandeo"/> */}
        {/* < Greet name="Pravin"/> */}
        {/*< Greet name="Pradeep"/> */}
        {/* <Welcome /> */}
        {/* <Hello /> */} 
        </div>
    )
  }
}

export default App;

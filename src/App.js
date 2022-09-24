import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

class App extends Component {
  render(){
    return(
      <div classname ="App">
        < Greet name="Dnyandeo"/>
        < Greet name="Pravin"/>
        < Greet name="Pradeep"/>
        {/* <Welcome /> */}
        {/* <Hello /> */} 
        </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Fruits from './components/Fruits';
import Stylesheet from './components/Stylesheet'

class App extends Component {
  render(){
    return(
      <div classname ="App">
        <Stylesheet />
        
        {/* <Fruits /> */}
        {/* <FunctionClick /> */}
        {/*< ClassClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
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

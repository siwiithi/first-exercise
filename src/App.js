import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './exercise/first'
import Second from './exercise/second'
import Third from './exercise/third'
import Fourth from './exercise/fourth'
import Fifth from './exercise/fifth'

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
        
      // </div>
      <div>
        <First />
        <Second />
        <Third />
        {/* <Fourth /> */}
        <Fifth />
      </div>
    )
  }
}

export default App;

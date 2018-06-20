import React, { Component } from 'react';
import logo from './logo.svg';
import headerLogo from './logo.png';
import Employees from './containers/Employees/Employees';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Employees />
        {/* <header className="App-header">
          <img src={headerLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to best music band ever</h1>
        </header>
        <div className="container">
          <p className="App-intro">
            <a href="https://github.com/vadvoice">learn more</a>
          </p>
        </div> */}
      </div>
    );
  }
}

export default App;

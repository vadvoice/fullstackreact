import React, { Component } from 'react';
import Employees from './containers/Employees/Employees';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Employees />
      </div>
    );
  }
}

export default App;

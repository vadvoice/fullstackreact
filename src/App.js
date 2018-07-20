import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Employees from './containers/Employees/Employees';
import About from './containers/About/About';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
	   	<Router>
	   		<Switch>
	   			<Route
	   				exact
	   				path="/"
	        		render={(renderProps) => (
		              <div>
		              	<Link to='/about'>About</Link>
		                <Employees />
		              </div>
		            )} />
	   			<Route
	   				path="/about"
	        		render={(renderProps) => (
		              <div>
		              	<Link to='/'>Home</Link>
		                <About />
		              </div>
		            )} />
	   			
	   		</Switch>
	   	</Router>
      </div>
    );
  }
}

export default App;

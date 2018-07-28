import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Employees from '../../containers/Employees/Employees';
import About from '../../containers/About/About';

import './App.scss';

class App extends Component {
  render() {
  	const props = this.props
    return (
	   	<Router>
	   		<Switch>
	   			<Route
	   				exact
	   				path="/"
	        		render={(renderProps) => {
						return (
			              <div className="container">
			              	<div className="navigation">
			              		<Link to='/about'>About</Link>
			              	</div>
			                <Employees { ...props } />
			              </div>
						)
        			}
	        		} />
	   			<Route
	   				path="/about"
	        		render={(renderProps) => (
		              <div className="container">
		              	<div className="navigation">
		              		<Link to='/'>Home</Link>
		              	</div>
		                <About { ...props } />
		              </div>
		            )} />
	   			
	   		</Switch>
	   	</Router>
    );
  }
}

export default App;

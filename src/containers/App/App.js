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
			              <div>
			              	<Link to='/about'>About</Link>
			                <Employees { ...props } />
			              </div>
						)
        			}
	        		} />
	   			<Route
	   				path="/about"
	        		render={(renderProps) => (
		              <div>
		              	<Link to='/'>Home</Link>
		                <About { ...props } />
		              </div>
		            )} />
	   			
	   		</Switch>
	   	</Router>
    );
  }
}

export default App;

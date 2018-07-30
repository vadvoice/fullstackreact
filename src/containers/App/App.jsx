import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Navigation from '../../components/Navigation/Navigation';

import Employees from '../../containers/Employees/Employees';
import About from '../../containers/About/About';
import NotFound from '../../components/NotFound/NotFound';

import './App.scss';

class App extends Component {
  render() {
  	const props = this.props
    return (
	   	<Router>
	   		<div className="app-container">
	   			<Route
	   				path="/"
	        		component={ Navigation }
        		/>
	   			<Switch>
		   			<Route
		   				exact
		   				path="/home"
		        		render={(renderProps) => {
							return (
				              <div className="container">
				                <Employees { ...props } />
				              </div>
							)
	        			}
		        	} />
		   			<Route
		   				path="/pacman"
		        		render={(renderProps) => (
			              <div className="container">
			                <About { ...props } />
			              </div>
			            )
			        } />
			        <Route 
			        	path='*' 
			        	exact={true} 
			        	component={ NotFound } 
			        />
	   			</Switch>
	   		</div>
	   	</Router>
    );
  }
}

export default App;

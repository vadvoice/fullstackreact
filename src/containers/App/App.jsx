import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

import Employees from '../../containers/Employees/Employees';
import About from '../../containers/About/About';
import GHStatistics from '../../containers/GHStatistics/GHStatistics';
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
				              <main className="app-content">
				                <Employees { ...props } />
				              </main>
							)
	        			}
		        	} />
		   			<Route
		   				path="/pacman"
		        		render={(renderProps) => (
			              <main className="app-content">
			                <About { ...props } />
			              </main>
			            )}
			            />
		            <Route
		   				path="/github"
		        		render={(renderProps) => (
			              <main className="app-content">
			                <GHStatistics { ...props } />
			              </main>
			            )}
		            />
			        <Route 
			        	path='*' 
			        	exact={true} 
						render={(renderProps) => {
							return <main className="app-content">
			                	<NotFound 
			                		status= {renderProps.location.key}
			                		title= {renderProps.location.pathname}
			                	/>
			              	</main>
						}}
			        />
	   			</Switch>
	   			<Route
	   				path="/"
	        		component={ Footer }
        		/>
	   		</div>
	   	</Router>
    );
  }
}

export default App;

import React from 'react';
import { Provider, connect } from 'react-redux';
import App from './App/App';
import configureStore from '../redux/configureStore';
import { fetchNewTime } from '../redux/actionCreators'

const store = configureStore;

const putStateToProps = state => {
  return {
    currentTime: state.currentTime
  }
}

const putActionsToProps = dispatch => {
  return ({
    updateTime: () => dispatch(fetchNewTime())
  })
}

const MainApp = connect(putStateToProps, putActionsToProps)(App);

const Root = (props) => {
	return ( 
		<Provider store={store}>
			<MainApp />
		</Provider>
	);
}

export default Root;

// import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import App from './App/App';
// import configureStore from '../redux/configureStore'
// import { connect } from 'react-redux'
// import { fetchNewTime } from '../redux/actionCreators'

// const putStateToProps = state => {
//   return {
//     currentTime: state.currentTime
//   }
// }

// const putActionsToProps = dispatch => {
//   return ({
//     updateTime: () => dispatch(fetchNewTime())
//   })
// }

// const store = configureStore()

// class Root extends Component {
//   render() {
//   	return (
// 			<Provider store={store}>
// 				<App />
// 			</Provider>
// 		);
// 	}
// }

// export default connect(putStateToProps, putActionsToProps)(Root);

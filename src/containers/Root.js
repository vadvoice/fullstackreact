import React from 'react';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux'
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
    updateTime: bindActionCreators(fetchNewTime, dispatch)
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
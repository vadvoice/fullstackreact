import React from 'react';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import App from './App/App.jsx';
import configureStore from '../redux/configureStore';
import { fetchNewTime } from '../redux/actionCreators'
import { searchString } from '../redux/actionCreators'
const store = configureStore;

const putStateToProps = state => {
  return {
    currentTime: state.currentTime,
    user: state.user,
    searchStr: state.searchStr,
  }
}

const putActionsToProps = dispatch => {
  return ({
    updateTime: bindActionCreators(fetchNewTime, dispatch),
    updateSeachStr: bindActionCreators(searchString, dispatch)
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
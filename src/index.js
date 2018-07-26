import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.scss';
// import Root from './containers/Root';
// import registerServiceWorker from './registerServiceWorker';
// import { Provider } from 'react-redux';
// import configureStore from './src/redux/configureStore'

// const store = configureStore()

// ReactDOM.render(
// 	<Provider store={store}>
// 		<Root />
// 	</Provider>, document.getElementById('root'));
// registerServiceWorker();

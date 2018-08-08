import React from 'react';
import TestUtils from 'react-dom/test-utils';

import App from '../App.jsx';

describe('App content testing', () => {

  it('wrap content in a div with .app-container class', () => {
    const wrapper = TestUtils.renderIntoDocument(<App />);
    const node =
    TestUtils
      .findRenderedDOMComponentWithClass(wrapper, 'app-container');
  });

})
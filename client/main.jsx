import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from './components/app.component.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});

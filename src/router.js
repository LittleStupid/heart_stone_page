import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link, Redirect } from 'dva/router';
import WelcomePage from './routes/WelcomePage'
import CardDetailPage from './routes/CardDetailPage'

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={WelcomePage} />
      <Route path="/card" component={CardDetailPage} />
      <Redirect from="/cards" to="/" />
    </Router>
  );
};

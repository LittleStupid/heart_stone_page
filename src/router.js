import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Header from './components/Header';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Header} />
    </Router>
  );
};

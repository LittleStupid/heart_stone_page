import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link, Redirect } from 'dva/router';
import WelcomePage from './routes/WelcomePage';
import CardDetailPage from './routes/CardDetailPage';
import CardBackPage from './routes/CardBackPage';
import HeroPage from './routes/HeroPage';
import CardPage from './routes/CardPage';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={WelcomePage} />
      <Route path="/card" component={CardDetailPage} />
      <Route path="/back" component={CardBackPage} />
      <Route path="/hero" component={HeroPage} />
      <Route path="/cards" component={CardPage} />
    </Router>
  );
};

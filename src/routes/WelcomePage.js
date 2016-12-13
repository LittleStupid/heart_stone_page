import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Welcome from '../components/Welcome'
import Header from '../components/Header'
import Diamond from '../components/Diamond'

function WelcomePage() {
  function clk(cost) {
    console.log('CLICK:' + cost);
  }

  return (
    <Header>
      <Welcome />
      <Diamond doClick={clk} cost={0} />
      <Diamond doClick={clk} cost={1} />
      <Diamond doClick={clk} cost={2} />
      <Diamond doClick={clk} cost={3} />
    </Header>
  );
}

WelcomePage.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
  };
}

export default connect(mapStateToProps)(WelcomePage);

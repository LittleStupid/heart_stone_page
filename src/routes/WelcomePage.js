import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Welcome from '../components/Welcome'
import Header from '../components/Header'
import Diamond from '../components/Diamond'

function WelcomePage() {
  return (
    <Header>
      <Welcome />
      <Diamond />
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

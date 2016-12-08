import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Welcome from '../components/Welcome'
import Header from '../components/Header'

function WelcomePage() {
  return (
    <Header>
      <Welcome />
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

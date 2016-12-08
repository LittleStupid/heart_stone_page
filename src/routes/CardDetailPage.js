import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import CardDetail from '../components/CardDetail'
import Header from '../components/Header'

function CardDetailPage() {
  return (
    <Header>
      <CardDetail />
    </Header>
  );
}

CardDetailPage.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
  };
}

export default connect(mapStateToProps)(CardDetailPage);

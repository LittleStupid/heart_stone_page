import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import CardDetail from '../components/CardDetail'
import Header from '../components/Header'
import { Button } from 'antd';


function CardDetailPage( { dispatch, imgAddress, info }) {
  function clk() {
    dispatch( { type: 'CardDetail/getCardInfo' } )
  }

  return (
    <Header>
      <CardDetail imgAddress={imgAddress} msg={info} />
      <Button type="primary" onClick={clk}>
        Click me!
      </Button>
    </Header>
  );
}

CardDetailPage.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    imgAddress: state.CardDetail.imgAddress,
    info: state.CardDetail.information
  };
}

export default connect(mapStateToProps)(CardDetailPage);

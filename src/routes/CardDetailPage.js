import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import CardDetail from '../components/CardDetail'
import Header from '../components/Header'
import { Button } from 'antd';


function CardDetailPage( { dispatch, imgAddress }) {
  function clk() {
    console.log("CLICKING")
    dispatch({ type: 'CardDetail/doChange', payload: 'http://wow.zamimg.com/images/hearthstone/cards/enus/original/EX1_116.png' });
    console.log("CLICKING END")
  }

  return (
    <Header>
      <CardDetail imgAddress={imgAddress}/>
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
    imgAddress: state.CardDetail.imgAddress
  };
}

export default connect(mapStateToProps)(CardDetailPage);

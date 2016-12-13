import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import CardBack from '../components/CardBack'
import Header from '../components/Header'
import { Row, Col } from 'antd';
import Diamond from '../components/Diamond'

function CardPage( {cards, dispatch}) {
  function clk(cost) {
    console.log('CLICK:' + cost);
    dispatch( { type: 'CardBack/getCard', payload: 'cost=' + cost } )
  }

  return (
    <Header>
      <Row type="flex">
        <Diamond doClick={clk} cost={0} />
        <Diamond doClick={clk} cost={1} />
        <Diamond doClick={clk} cost={2} />
        <Diamond doClick={clk} cost={3} />
      </Row>
      <Row type="flex">
      {
        cards.map( (card) => {
          return (
            <Col span={4} key={card.cardId}>
              <CardBack imgUrl={card.img} name={card.name} />
            </Col>
          )
        })
      }
      </Row>
    </Header>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    cards: state.CardBack.cards
  };
}

export default connect(mapStateToProps)(CardPage);

import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import CardBack from '../components/CardBack'
import Header from '../components/Header'
import { Row, Col, Button } from 'antd';
import Diamond from '../components/Diamond'

function CardPage( {cards, param, dispatch}) {
  function clk(cost) {
    console.log('CLICK:' + cost);
    dispatch( { type: 'CardBack/getCard', payload: { cost: cost, page: 0 } } );
  }

  function prev() {
    let queryParam = { ...param, page: param.page - 1 };
    dispatch( { type: 'CardBack/getCard', payload: queryParam } );
  }

  function next() {
    let queryParam = { ...param, page: param.page + 1 };
    dispatch( { type: 'CardBack/getCard', payload: queryParam } );
  }

  return (
    <Header>
      <Row type="flex">
        <Diamond doClick={clk} cost={0} />
        <Diamond doClick={clk} cost={1} />
        <Diamond doClick={clk} cost={2} />
        <Diamond doClick={clk} cost={3} />
        <Diamond doClick={clk} cost={4} />
        <Diamond doClick={clk} cost={5} />
        <Diamond doClick={clk} cost={6} />
        <Diamond doClick={clk} cost={7} />
        <Diamond doClick={clk} cost={8} />
        <Diamond doClick={clk} cost={9} />
        <Diamond doClick={clk} cost={10} />
      </Row>
      <Row>
        <Button onClick={prev}>Prev Page</Button>
        <Button onClick={next}>Next Page</Button>
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
    cards: state.CardBack.cards,
    param: state.CardBack.param
  };
}

export default connect(mapStateToProps)(CardPage);

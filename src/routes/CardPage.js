import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import CardBack from '../components/CardBack'
import Header from '../components/Header'
import { Row, Col } from 'antd';

function CardPage( {cards}) {
  return (
    <Header>
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

import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import CardBack from '../components/CardBack'
import Header from '../components/Header'
import { Row, Col, Button } from 'antd';
import Diamond from '../components/Diamond';
import PlayerClass from '../components/PlayerClass';

function CardPage( {cards, param, dispatch}) {
  function clickCost(cost) {
    if( param.cost === cost ) {
      console.log('you are in the same cost page');
      return ;
    }
    let queryParam = { ...param, cost: cost, page: 0 };
    dispatch( { type: 'CardBack/getCard', payload: queryParam } );
  }

  function clickClass(playerClass) {
    if( param.playerClass === playerClass ) {
      console.log('you are in the same playerClass page');
      return ;
    }
    let queryParam = { ...param, playerClass: playerClass, page: 0 };
    dispatch( { type: 'CardBack/getCard', payload: queryParam } );
  }

  function prev() {
    let queryParam = { ...param, page: param.page - 1 };
    dispatch( { type: 'CardBack/getCard', payload: queryParam } );
  }

  function next() {
    let queryParam = { ...param, page: param.page + 1 };
    dispatch( { type: 'CardBack/getCard', payload: queryParam } );
  }

  function selectMage() {
    let queryParam = { ...param, page: 0, playerClass: 'Mage'};
    dispatch( { type: 'CardBack/getCard', payload: queryParam } );
  }

  function selectShaman() {
    let queryParam = { ...param, page: 0, playerClass: 'Shaman'};
    dispatch( { type: 'CardBack/getCard', payload: queryParam } );
  }

  return (
    <Header>
      <Row type="flex">
        <Diamond doClick={clickCost} />
        <Diamond doClick={clickCost} cost={0} />
        <Diamond doClick={clickCost} cost={1} />
        <Diamond doClick={clickCost} cost={2} />
        <Diamond doClick={clickCost} cost={3} />
        <Diamond doClick={clickCost} cost={4} />
        <Diamond doClick={clickCost} cost={5} />
        <Diamond doClick={clickCost} cost={6} />
        <Diamond doClick={clickCost} cost={7} />
        <Diamond doClick={clickCost} cost={8} />
        <Diamond doClick={clickCost} cost={9} />
        <Diamond doClick={clickCost} cost={10} />
      </Row>
      <Row>
        <Button onClick={prev}>Prev Page</Button>
        <Button onClick={next}>Next Page</Button>
      </Row>
      <Row>
        <PlayerClass playerClass='Druid' doClick={clickClass} />
        <PlayerClass playerClass='Hunter' doClick={clickClass} />
        <PlayerClass playerClass='Mage' doClick={clickClass} />
        <PlayerClass playerClass='Paladin' doClick={clickClass} />
        <PlayerClass playerClass='Priest' doClick={clickClass} />
        <PlayerClass playerClass='Rogue' doClick={clickClass} />
        <PlayerClass playerClass='Shaman' doClick={clickClass} />
        <PlayerClass playerClass='Warlock' doClick={clickClass} />
        <PlayerClass playerClass='Warrior' doClick={clickClass} />
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

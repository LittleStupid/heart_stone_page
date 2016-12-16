import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import CommonCard from '../components/CommonCard'
import Header from '../components/Header'
import { Row, Col, Button } from 'antd';
import Diamond from '../components/Diamond';
import PlayerClass from '../components/PlayerClass';
import HeroModal from '../components/HeroModal';
import SmallCard from '../components/SmallCard';
import styles from './CardPage.less';

function CardPage( {cards, param, showModal, deck, dispatch}) {
  function clickCost(cost) {
    if( param.cost === cost ) {
      return ;
    }
    let queryParam = { ...param, cost: cost, page: 0 };
    dispatch( { type: 'CommonCard/getCard', payload: queryParam } );
  }

  function clickClass(playerClass) {
    if( param.playerClass === playerClass ) {
      return ;
    }
    let queryParam = { ...param, playerClass: playerClass, page: 0 };
    dispatch( { type: 'CommonCard/getCard', payload: queryParam } );
  }

  function prev() {
    let queryParam = { ...param, page: param.page - 1 };
    dispatch( { type: 'CommonCard/getCard', payload: queryParam } );
  }

  function next() {
    let queryParam = { ...param, page: param.page + 1 };
    dispatch( { type: 'CommonCard/getCard', payload: queryParam } );
  }

  function selectMage() {
    let queryParam = { ...param, page: 0, playerClass: 'Mage'};
    dispatch( { type: 'CommonCard/getCard', payload: queryParam } );
  }

  function selectShaman() {
    let queryParam = { ...param, page: 0, playerClass: 'Shaman'};
    dispatch( { type: 'CommonCard/getCard', payload: queryParam } );
  }

  function openModal() {
    dispatch( { type: 'CommonCard/setModal', payload: true } );
  }

  function closeModal() {
    dispatch( { type: 'CommonCard/setModal', payload: false } );
  }

  function selectPlayerClass( playerClass ) {
    closeModal();
    dispatch( { type: 'CommonCard/clearDeck' } );
    clickClass( playerClass );
  }

  function clickCard() {
  }

  function addToDeck(name) {
    dispatch( { type: 'CommonCard/addCardToDeck', payload: name } );
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
        <Button onClick={openModal}>Create Deck</Button>
        <HeroModal showModal={showModal} onCloseFunc={closeModal}
                   onSelectHero={selectPlayerClass} />
      </Row>
      <Row type="flex">
      {
        cards.map( (card) => {
          return (
            <Col span={4} key={card.cardId}>
              <CommonCard imgUrl={card.img} name={card.name} doClick={addToDeck}/>
            </Col>
          )
        })
      }
      </Row>
      <Row className={styles.pad}>
        <Button onClick={prev}>Prev Page</Button>
        <Button onClick={next}>Next Page</Button>
      </Row>
      <Row>
      {
        deck.map( (card) => {
          return (
            <SmallCard name={card} />
          )
        })
      }
      </Row>
    </Header>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    cards: state.CommonCard.cards,
    param: state.CommonCard.param,
    showModal: state.CommonCard.showModal,
    deck: state.CommonCard.deck
  };
}

export default connect(mapStateToProps)(CardPage);

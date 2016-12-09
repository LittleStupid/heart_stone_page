import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import CardBack from '../components/CardBack'
import Header from '../components/Header'
import { Row, Col } from 'antd';

function HeroPage( {heros}) {
  return (
    <Header>
      <Row type="flex">
      {
        heros.map( (hero) => {
          return (
            <Col span={4} key={hero.cardBackId}>
                <CardBack imgUrl={hero.img} name={hero.name} />
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
    heros: state.CardBack.heros.filter( (hero) => { return hero.rarity === 'Free' } )
  };
}

export default connect(mapStateToProps)(HeroPage);

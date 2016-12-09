import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import CardBack from '../components/CardBack'
import Header from '../components/Header'
import { Row, Col } from 'antd';

function CardBackPage( { dispatch, backs}) {
  return (
    <Header>
      <Row type="flex">
        {
          backs.map( (back) => {
            return (
              <Col span={4} key={back.cardBackId}>
                <CardBack imgUrl={back.img} name={back.name} />
              </Col>
            )
          })
        }
      </Row>
    </Header>
  );
}

CardBack.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    backs: state.CardBack.backs
  };
}

export default connect(mapStateToProps)(CardBackPage);

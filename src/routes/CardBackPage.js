import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import CardBack from '../components/CardBack'
import Header from '../components/Header'
import { Row, Col, Popover } from 'antd';

function CardBackPage( {backs}) {
  return (
    <Header>
      <Row type="flex">
      {
        backs.map( (back) => {
          return (
            <Popover title={back.name} key={back.cardBackId} content={back.howToGet}>
              <Col span={3} >
                  <CardBack imgUrl={back.img} anmUrl={back.imgAnimated} name={back.name} />
              </Col>
            </Popover>
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

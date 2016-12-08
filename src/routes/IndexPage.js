import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';
import { Row, Col } from 'antd';
import { Rate } from 'antd';

const IndexPage = (props) => {
  return (
    <div>
      <Row>
        <Rate disabled defaultValue={2} />
        <Col span={6}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
    </div>
  );
};

IndexPage.propTypes = {
};

export default connect()(IndexPage);

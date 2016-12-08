import React from 'react';
import { Row, Col } from 'antd';


const Example = (props) => {
  return (
    <div>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
    </div>
  );
};

Example.propTypes = {
};

export default Example;

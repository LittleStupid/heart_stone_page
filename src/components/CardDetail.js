import React from 'react';
import { Card } from 'antd';

const CardDetail = ( { imgAddress, msg } ) => {
  return (
    <Card>
      <div className="custom-image">
        <img alt="example" src={imgAddress} />
      </div>
      <h3>{msg}</h3>
    </Card>
  );
};

CardDetail.propTypes = {
};

export default CardDetail;

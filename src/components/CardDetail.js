import React from 'react';
import { Card } from 'antd';

const CardDetail = ( { imgAddress, msg } ) => {
  return (
    <div>
      <Card>
        <div className="custom-image">
          <img alt="example" src={imgAddress} />
        </div>
      </Card>
      <div>
        <h3>{msg}</h3>
      </div>
    </div>
  );
};

CardDetail.propTypes = {
};

export default CardDetail;

import React from 'react';
import { Card } from 'antd';

const CardDetail = ( { imgAddress } ) => {
  return (
    <Card>
      <div className="custom-image">
        <img alt="example" src={imgAddress} />
      </div>
    </Card>
  );
};

CardDetail.propTypes = {
};

export default CardDetail;

import React from 'react';
import { Card } from 'antd';

const CardBack = ( { imgUrl } ) => {
  return (
    <Card>
      <img alt="cardback" src={imgUrl} width="100%" height="100%"/>
    </Card>
  );
};

CardBack.propTypes = {
};

export default CardBack;

import React from 'react';
import { Card } from 'antd';
import styles from './CardBack.less';

const CardBack = ( { imgUrl, name } ) => {
  return (
    <Card>
      <img alt="cardback" src={imgUrl} width="100%" height="100%" />
      <div className={styles.name}>
        <h3>{name}</h3>
      </div>
    </Card>
  );
};

CardBack.propTypes = {
};

export default CardBack;

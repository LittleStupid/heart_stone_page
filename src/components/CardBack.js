import React from 'react';
import { Spin, Card } from 'antd';
import styles from './CardBack.less';

class CardBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: props.imgUrl, isLoading: true };
  }

  handleImageLoaded() {
    this.setState({ isLoading: false });
  }

  handleImageErrored() {
    this.setState({ url: 'http://placehold.it/307x465',
                    isLoading: false });
  }
  render() {
    return (
      <Card>
        <Spin tip="Loading..." spinning={this.state.isLoading}>
          <img alt="cardback"
            src={this.state.url}
            width="100%"
            height="100%"
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)}
          />
        </Spin>
        <div className={styles.name}>
          <h3>{this.props.name}</h3>
        </div>
      </Card>
    )
  }
};

CardBack.propTypes = {
  imgUrl: '',
  name: ''
};

export default CardBack;

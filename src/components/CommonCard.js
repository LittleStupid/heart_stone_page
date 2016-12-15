import React, { PropTypes } from 'react';
import { Spin, Card } from 'antd';
import styles from './CommonCard.less';

class CommonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: props.imgUrl,
                   isLoading: false
                 };
  }

  handleImageLoaded() {
    this.setState({ isLoading: false });
  }

  handleImageErrored() {
    this.setState({ url: 'http://wow.zamimg.com/images/hearthstone/backs/original/Card_Back_Default.png',
                    isLoading: false });
  }

  handleHoverIn() {
    if( this.props.anmUrl ) {
      this.setState( { url: this.props.anmUrl } );
    }
  }

  handleHoverOut() {
    if( this.props.imgUrl ) {
      this.setState( { url: this.props.imgUrl } );
    }
  }

  handleClick() {
    console.log('Handle click');
    if( this.props.doClick ) {
      this.props.doClick( this.state.url );
      console.log('do url clck');
    }
  }

  render() {
    return (
      <div className={styles.lay}>
        <Spin tip="Loading..." spinning={this.state.isLoading}>
          <img alt="cardback"
            src={this.state.url}
            width="100%"
            height="100%"
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)}
            onMouseEnter={this.handleHoverIn.bind(this)}
            onMouseLeave={this.handleHoverOut.bind(this)}
            onClick={this.handleClick.bind(this)}
          />
        </Spin>
        <div className={styles.name}>
          <h3>{this.props.name}</h3>
        </div>
    </div>
    )
  }
};

CommonCard.propTypes = {
  imgUrl: '',
  name: '',
  doClick: PropTypes.func
}

export default CommonCard;

import React, { PropTypes } from 'react';
import styles from './Diamond.less';

class Diamond extends React.Component {
  constructor(props) {
    super(props);

    this.state = { diamond_style: styles.picture};
  }

  handleHoverIn() {
    this.setState({ diamond_style: styles.picture_hover});
  }

  handleHoverOut() {
    this.setState({ diamond_style: styles.picture});
  }


  render() {
    return (
      <div className={this.state.diamond_style}
       onMouseEnter={this.handleHoverIn.bind(this)}
       onMouseLeave={this.handleHoverOut.bind(this)} />
    )
  }
}

Diamond.propTypes = {
};

export default Diamond;

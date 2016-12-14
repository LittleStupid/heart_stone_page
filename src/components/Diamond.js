import React, { PropTypes } from 'react';
import styles from './Diamond.less';

class Diamond extends React.Component {
  constructor(props) {
    super(props);

    this.state = { diamond_style: styles.picture,
                   cost: props.cost };
  }

  handleHoverIn() {
    this.setState({ diamond_style: styles.picture_hover});
  }

  handleHoverOut() {
    this.setState({ diamond_style: styles.picture});
  }

  handleClick() {
    // console.log('CLICK:' + this.state.num );
    if( this.props.doClick ) {
      this.props.doClick(this.state.cost);
    }
  }

  render() {
    return (
      <div>

      <div className={this.state.diamond_style}
       onClick={this.handleClick.bind(this)}
       onMouseEnter={this.handleHoverIn.bind(this)}
       onMouseLeave={this.handleHoverOut.bind(this)} >
        <div className={styles.fontzero}>
        0
        </div>
      </div>
      </div>
    )
  }
}

Diamond.propTypes = {
};

export default Diamond;

import React, { PropTypes } from 'react';

class SmallCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <img src={this.props.name} height="128px"/>
    )
  }
}

SmallCard.propTypes = {
  name: PropTypes.string
}

export default SmallCard;

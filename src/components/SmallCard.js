import React, { PropTypes } from 'react';

class SmallCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <h1>{this.props.name}</h1>
    )
  }
}

SmallCard.propTypes = {
  name: PropTypes.string
}

export default SmallCard;

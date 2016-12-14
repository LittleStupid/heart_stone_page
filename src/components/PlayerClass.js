import React, { PropTypes } from 'react';

class PlayerClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { myClass: props.playerClass }
  }

  handleClick() {
    console.log('CLICK:');
    if( this.props.doClick ) {
      this.props.doClick(this.state.myClass);
    }
  }

  render() {
    return (
      <span onClick={this.handleClick.bind(this)}>
      <img src='../assets/Mage.png' />
        <h2>{this.state.myClass}</h2>
      </span>
    )
  }
}

export default PlayerClass;

import React, { PropTypes } from 'react';

class PlayerClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { myClass: props.playerClass,
                   imgUrl: '' };
  }

  handleClick() {
    console.log('CLICK:');
    if( this.props.doClick ) {
      this.props.doClick(this.state.myClass);
    }
  }

  getImg() {
    const IMGS = {
      'Druid': 'http://pic1.mofang.com/2014/1119/20141119011457457.png',
      'Mage': 'http://pic1.mofang.com/2014/1119/20141119011500273.png',
      'Hunter': 'http://pic2.mofang.com/2014/1119/20141119011514891.png',
      'Paladin': 'http://pic1.mofang.com/2014/1119/20141119011517810.png',
      'Priest': 'http://pic0.mofang.com/2014/1119/20141119011532308.png',
      'Rogue': 'http://pic1.mofang.com/2014/1119/20141119011541567.png',
      'Shaman': 'http://pic2.mofang.com/2014/1119/20141119011547359.png',
      'Warlock': 'http://pic0.mofang.com/2014/1119/20141119011554832.png',
      'Warrior': 'http://pic1.mofang.com/2014/1119/20141119011600427.png'
    };

    return IMGS[this.state.myClass];
  }

  render() {
    return (
      <span onClick={this.handleClick.bind(this)}>
      <img src={this.getImg()} height="64px"/>
      </span>
    )
  }
}

export default PlayerClass;

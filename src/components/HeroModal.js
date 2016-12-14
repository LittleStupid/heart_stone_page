import React, { PropTypes } from 'react';
import { Modal } from 'antd';
import PlayerClass from './PlayerClass';

class HeroModal extends React.Component {
  constructor(props) {
    super(props);
  }

  showModal() {
   this.setState({
     visible: true,
   });
  }
  handleOk() {
   console.log('Clicked OK');
  }
  handleCancel(e) {
   console.log(e);
  }
  clickClass() {
    console.log('CLICK CLASS');
  }

  render() {
    return (
      <div>
      <Modal title="Basic Modal" visible={this.props.showModal}
             onOk={this.props.onCloseFunc} onCancel={this.props.onCloseFunc} >
         <PlayerClass playerClass='Druid' doClick={this.clickClass} />
         <PlayerClass playerClass='Hunter' doClick={this.clickClass} />
         <PlayerClass playerClass='Mage' doClick={this.clickClass} />
         <PlayerClass playerClass='Paladin' doClick={this.clickClass} />
         <PlayerClass playerClass='Priest' doClick={this.clickClass} />
         <PlayerClass playerClass='Rogue' doClick={this.clickClass} />
         <PlayerClass playerClass='Shaman' doClick={this.clickClass} />
         <PlayerClass playerClass='Warlock' doClick={this.clickClass} />
         <PlayerClass playerClass='Warrior' doClick={this.clickClass} />
      </Modal>
    </div>
    )
  }
}

HeroModal.propTypes = {
  showModal: PropTypes.bool,
  onCloseFunc: PropTypes.func
};

export default HeroModal;

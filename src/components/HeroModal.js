import React, { PropTypes } from 'react';
import { Modal, Row } from 'antd';
import PlayerClass from './PlayerClass';

class HeroModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Modal title="Select Your Class" visible={this.props.showModal} width={610}
             onOk={this.props.onCloseFunc} onCancel={this.props.onCloseFunc} >
         <Row>
           <PlayerClass playerClass='Druid' doClick={this.props.onSelectHero} />
           <PlayerClass playerClass='Hunter' doClick={this.props.onSelectHero} />
           <PlayerClass playerClass='Mage' doClick={this.props.onSelectHero} />
           <PlayerClass playerClass='Paladin' doClick={this.props.onSelectHero} />
           <PlayerClass playerClass='Priest' doClick={this.props.onSelectHero} />
           <PlayerClass playerClass='Rogue' doClick={this.props.onSelectHero} />
           <PlayerClass playerClass='Shaman' doClick={this.props.onSelectHero} />
           <PlayerClass playerClass='Warlock' doClick={this.props.onSelectHero} />
           <PlayerClass playerClass='Warrior' doClick={this.props.onSelectHero} />
         </Row>
      </Modal>
    </div>
    )
  }
}

HeroModal.propTypes = {
  showModal: PropTypes.bool,
  onCloseFunc: PropTypes.func,
  onSelectHero: PropTypes.func
};

export default HeroModal;

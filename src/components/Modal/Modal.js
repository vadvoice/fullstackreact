import React, {Component} from 'react';
import Modal from 'react-modal';
import Icon from 'react-icons-kit';
import { cross } from 'react-icons-kit/icomoon/cross';
import './Modal.scss'


const themeSchema = {
  'light': {
    content: {
      backgroundColor: '#81CFE0',
      color: '#2C3E50'
    }
  },
  'dark': {
    content: {
      backgroundColor: '#22313F',
      color: '#C5EFF7'
    }
  }
}

class ReactModal extends Component {
  render () {
  	const { toggleStatus, toggleRequest, header, body, theme } = this.props
  	const modalStyles = {overlay: {zIndex: 999}};
    const colorSchema = theme ? themeSchema[theme] : themeSchema['light']
    const mergedStyles = { ...modalStyles, ...colorSchema };

    return (
      <div className="modal-container">
        <Modal
          style={ mergedStyles }
          isOpen={toggleStatus}
          contentLabel="Minimal Modal Example"
        >
          <header>
            <h1>
            {header}
          </h1>
            <Icon
              className="modal-close" 
              icon={cross}
              onClick={(e) => {
                toggleRequest()
              }}
            />
          </header>
          { body }
        </Modal>
      </div>
    );
  }
}

export default ReactModal

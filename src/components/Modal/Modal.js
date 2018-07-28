import React, {Component} from 'react';
import Modal from 'react-modal';
import PersonDetails from '../PersonDetails/PersonDetails';

class ReactModal extends Component {
  render () {
  	const { toggleStatus, toggleRequest, info } = this.props

  	const modalStyles = {overlay: {zIndex: 999}};
    return (
      <div>
        <Modal
        	style={ modalStyles }
           isOpen={toggleStatus}
           contentLabel="Minimal Modal Example"
        >
        	<PersonDetails
        		full={true}
        		person={info}
        	></PersonDetails>
			<button onClick={(e) => {
				toggleRequest()
			}}>Close Modal</button>
        </Modal>
      </div>
    );
  }
}

export default ReactModal

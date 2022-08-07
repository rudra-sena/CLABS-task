import {useState} from 'react';
import Modal from 'react-modal';

import ModalContent from '../ModalContent/ModalContent'
import './SaveSegment.css'

Modal.setAppElement('#root')
const SaveSegment = () => {

    const [modal,setModal] = useState(false);
    return ( 
        <div className="save">
            <button className="save-btn" onClick={() => setModal(true)}>Save segment</button>
            <Modal isOpen={modal} 
            style={
                {
                    overlay:{
                        backgroundColor: 'rgba(0, 0, 0, 0.3)'
                    },
                    content:{
                        top: '0px',
                        left: '60%',
                        right: '0px',
                        bottom: '0px',
                        padding: '0px'
                    }
                }
            }
            >
                <ModalContent cancel= {setModal}/>
            </Modal>
        </div>
     );
}
 
export default SaveSegment;
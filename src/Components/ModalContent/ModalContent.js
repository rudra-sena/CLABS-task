import Header from '../Header/Header'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import './ModalContent.css'


const ModalContent = (props) => {
    
    return ( 
        <div className="modal-content">
                <Header title="Saving Segment"/>
                <Body/>
                <Footer props={props}/>
        </div>
     );
}
 
export default ModalContent;
import { Modal, Image, Button } from "react-bootstrap";
import orcImage from "../assets/orc.png"
function popup2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title  className= "font-pixel"  id="contained-modal-title-vcenter">
          <p style={{textAlign:"center"}}>People of Garlinda</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{textAlign:"center"}}>
        <Image  src={orcImage} rounded fluid/>
        </div>
        <p className="font-pixel">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}><p className="font-pixel">Close</p></Button>
      </Modal.Footer>
    </Modal>
  );
}


  export default popup2
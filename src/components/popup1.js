import { Modal } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
function popup1(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src="https://imagevars.gulfnews.com/2017/7/24/1_16a08412ffc.2063789_4172633237_16a08412ffc_large.jpg" alt="Girl in a jacket" width="60px" height="60px"/>

          <h4>1</h4>
          <p>
1
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default popup1
import { Modal } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
function popup4(props) {
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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDq9oBGnpV0N6FhJsBVlpl0pkH_YgN0KkONw&usqp=CAU" alt="Girl in a jacket" width="60" height="60"/>

          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default popup4
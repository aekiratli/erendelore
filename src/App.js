import './App.css';
import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup1 from './popup1';
import Popup2 from './popup2';
import Popup3 from './popup3';
import Popup4 from './popup4';



function App() {
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);


  return (
    <>
    <Container style={{backgroundImage:"url(https://www.mapsofindia.com/images2/india-map-2019.jpg)"}}>
      <br/>
      <br/>
      <br/>
      <Row>
        <Col><div onClick={() => setModalShow1(true)} className="HugeBox">1 of 1</div></Col>
        <Col><div onClick={() => setModalShow2(true)} className="HugeBox">1 of 2</div></Col>
      </Row>
      <Row>
        <Col><div onClick={() => setModalShow3(true)} className="HugeBox">2 of 1</div></Col>
        <Col><div onClick={() => setModalShow4(true)}  className="HugeBox">2 of 2</div></Col>
      </Row>
      <br/>
      <br/>

    </Container>

      <Popup1
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />
            <Popup2
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />
            <Popup3
        show={modalShow3}
        onHide={() => setModalShow3(false)}
      />
            <Popup4
        show={modalShow4}
        onHide={() => setModalShow4(false)}
      />
    </>

  );
}

export default App;

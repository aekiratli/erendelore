import { Row, Col,  Container } from 'react-bootstrap';


function Footer() {
    return (
        <div style={{ textAlign: "center", backgroundColor: "#1c1c4d" }}>
            <br/>
            <Row >
                    <Col ><p style={{color:"red"}} className="font-pixel">NFT</p>
                        <Row >
                            <Col > <a href="#home"style={{color:"white"}} className="font-pixel" >OpenSea</a></Col>
                        </Row>
                        <Row>
                            <Col ><a href="#home"style={{color:"white"}} className="font-pixel" >Smart Contract</a></Col>
                        </Row>
                    </Col>

                <Col><p style={{color:"red"}} className="font-pixel">Social Media</p>
                    <Row>
                        <Col><a href="#home"style={{color:"white"}} className="font-pixel" >Twitter</a></Col>
                    </Row>
                    <Row>
                        <Col><a href="#home"style={{color:"white"}} className="font-pixel" >Discord</a></Col>
                    </Row>
                </Col>

            </Row>
            <br/>

            <Row >
                <div style={{ color:"white", backgroundColor: "black" }} >
                    <br />
                    <Col >All rights reserved @Warriors 2021</Col>
                    <br />
                </div>
            </Row>
        </div>
    )
}

export default Footer


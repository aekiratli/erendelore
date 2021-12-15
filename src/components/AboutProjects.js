import { Col, Row, Container, Image } from "react-bootstrap"
import present from "../assets/present.png"

function AboutProject() {
    return (
        <div style={{ backgroundImage: "url(https://images2.alphacoders.com/705/thumb-1920-705837.png)" }}>
            <Container>
                <Row className="align-items-center">
                    <Col sm="6" >
                        <div className="RightPhoto">
                            <Image className="vert-move" width="512" src={present} fluid/>
                        </div>
                    </Col>
                    <Col sm="6">
                        <div className="LeftText">
                            <h2 className="font-pixel">What is Lorem Ipsum</h2>
                            <p style={{ fontSize: "12px" }} className="font-pixel">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr
                                y's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scram
                                bled it to make a type specimen book. It has survived not only five centuries, but also the leap into electr
                                onic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co
                                ntaining Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default AboutProject
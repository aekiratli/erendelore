import Popup1 from "../components/popup1"
import Popup2 from "../components/popup2"
import Popup3 from "../components/popup3"
import Popup4 from "../components/popup4"
import { useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import map from "../assets/map.png"

function AboutRace() {
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [modalShow4, setModalShow4] = useState(false);


    return (


        <>
         <Container style={{textAlign:"center"}}><h1 className="font-header-typewriting">About the World</h1>
             </Container>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1645">
                <image width="1920" height="1645" href={map}></image>
                <a  onClick={() => setModalShow1(true)}>
                    <polygon className="area" points="62 98, 908  130, 400 904"></polygon>
                    <svg width="3000" height="3000" viewBox="0 0 512 512">
                        <path opacity="100%" fill="red" className="question-move" d="M90 70c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 15c-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024 0 .566-.458 1.025-1.024 1.025zm1.606-4.858c-.74.799-.775 1.241-.766 1.785h-1.643c-.006-1.208.016-1.742 1.173-2.842.469-.446.84-.799.788-1.493-.047-.66-.599-1.004-1.117-1.004-.581 0-1.261.432-1.261 1.649h-1.646c0-1.966 1.155-3.237 2.941-3.237.849 0 1.592.278 2.09.783.468.473.709 1.125.7 1.883-.013 1.134-.704 1.878-1.259 2.476z" />
                    </svg>
                </a>

                <a onClick={() => setModalShow2(true)}>
                <polygon className="area2" points="926 140, 1730 146, 1752 950, 796 1084"></polygon>

                    <svg width="3000" height="3000" viewBox="0 0 512 512">
                        <path fill="cyan" className="question-move" d="M240 120c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 15c-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024 0 .566-.458 1.025-1.024 1.025zm1.606-4.858c-.74.799-.775 1.241-.766 1.785h-1.643c-.006-1.208.016-1.742 1.173-2.842.469-.446.84-.799.788-1.493-.047-.66-.599-1.004-1.117-1.004-.581 0-1.261.432-1.261 1.649h-1.646c0-1.966 1.155-3.237 2.941-3.237.849 0 1.592.278 2.09.783.468.473.709 1.125.7 1.883-.013 1.134-.704 1.878-1.259 2.476z" />
                    </svg>
                </a>

                <a onClick={() => setModalShow3(true)}>
                <polygon className="area3" points="144 1080,1560 986, 1704 1446,144 1569"></polygon>

                    <svg width="3000" height="3000" viewBox="0 0 512 512">
                        <path fill="purple" className="question-move" d="M140 200c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 15c-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024 0 .566-.458 1.025-1.024 1.025zm1.606-4.858c-.74.799-.775 1.241-.766 1.785h-1.643c-.006-1.208.016-1.742 1.173-2.842.469-.446.84-.799.788-1.493-.047-.66-.599-1.004-1.117-1.004-.581 0-1.261.432-1.261 1.649h-1.646c0-1.966 1.155-3.237 2.941-3.237.849 0 1.592.278 2.09.783.468.473.709 1.125.7 1.883-.013 1.134-.704 1.878-1.259 2.476z" />
                    </svg>
                </a>
            </svg>
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

    )
}

export default AboutRace



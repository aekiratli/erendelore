import React, { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import mintGif from "../assets/mint.gif"
// reactstrap components
import { Button, Container, Row, Col, Image } from "react-bootstrap";

// core components

function Mint({ provider }) {
    const [mintAmount, setAmount] = React.useState(1);
    const [mintPrice, setPrice] = React.useState(0.05);
    const [eyes, setEyes] = React.useState(1);
    const [mouth, setMouth] = React.useState(1);
    const [skin, setSkin] = React.useState(1);

    const eyesList = ["Laser", "Turbo", "Cancer", "Blyat", "Some Text", "Lorem", "Ipsum", "Qwerty", "Wow", "White"]
    const mouthList = ["Laser", "Turbo", "Cancer", "Blyat", "Some Text", "Lorem", "Ipsum", "Qwerty", "Wow", "White"]
    const SkinList = ["Laser", "Turbo", "Cancer", "Blyat", "Some Text", "Lorem", "Ipsum", "Qwerty", "Wow", "White"]

    useEffect(() => {
        setInterval(() => {
            setEyes(eyesList[Math.floor(Math.random() * eyesList.length)])
            setMouth(mouthList[Math.floor(Math.random() * mouthList.length)])
            setSkin(SkinList[Math.floor(Math.random() * SkinList.length)])
        }, 5000);
    }, []);

    function counter(increment) {
        var _mintAmount

        if (increment) {
            _mintAmount = mintAmount + 1
            setAmount(_mintAmount)
        }
        else {
            _mintAmount = mintAmount - 1
            setAmount(_mintAmount)
        }

        setPrice((_mintAmount * 0.05).toFixed(2))
    }


    return (
        <>
            <br />
            <br />
            <br />
            <div style={{ textAlign: "center" }}><h3 className="font-header-typewriting">Mint Your Warrior</h3></div>
            <br />
            <br />
            <Container >

                <Row className="align-items-center">
                    <Col sm="6">

                        <Row><Col><h6 style={{ color: "red" }} className="font-header-mint">Weapon:</h6></Col> <Col><h6 className="font-header-mint">{eyes}</h6></Col></Row>
                        <Row><Col><h6 style={{ color: "red" }} className="font-header-mint">Armor:</h6></Col> <Col><h6 className="font-header-mint">{skin}</h6></Col></Row>
                        <Row><Col><h6 style={{ color: "red" }} className="font-header-mint">Gear:</h6></Col> <Col><h6 className="font-header-mint">{eyes}</h6></Col></Row>
                        <Row><Col><h6 style={{ color: "red" }} className="font-header-mint">Trait1:</h6></Col> <Col><h6 className="font-header-mint">{mouth}</h6></Col></Row>
                        <Row><Col><h6 style={{ color: "red" }} className="font-header-mint">Skill:</h6></Col> <Col><h6 className="font-header-mint">{skin}</h6></Col></Row>
                        <Row><Col><h6 style={{ color: "red" }} className="font-header-mint">Weapon:</h6></Col> <Col><h6 className="font-header-mint">{eyes}</h6></Col></Row>
                        <Row><Col><h6 style={{ color: "red" }} className="font-header-mint">Mint Price:</h6></Col> <Col><h6 className="font-header-mint">{mintPrice} ETH</h6></Col></Row>
                        <Row><Col><h6 style={{ color: "red" }} className="font-header-mint">                                    <Button onClick={() => counter(false)} c color="info" type="button" >-</Button>

                            {"    " + mintAmount + "    "}
                            <Button onClick={() => counter(true)} color="info" type="button">+</Button></h6></Col> <Col><h6 className="font-header-mint">                                    <Button color="info" type="button" onClick={() => console.log("on the way!")}>
                                Mint
                            </Button></h6></Col></Row>

                        <br />
                    </Col>
                    <br />
                    <Col sm="6">
                        <Image src={mintGif} thumbnail fluid />
                    </Col>
                </Row>
            </Container>
        </>
    );
}


export default Mint;

import './App.css';
import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup1 from "./components/popup1"
import Popup2 from "./components/popup2"
import Popup3 from "./components/popup3"
import Popup4 from "./components/popup4"
import NavigationBar from "./components/Navbar"
import AboutProject from "./components/AboutProjects"
import AboutRace from './components/AboutRace';

function App() {



  return (
    <>
      {/* <Container><NavigationBar/></Container> */}

      <AboutProject />
      <br />
      <AboutRace />
    </>
  );
}

export default App;

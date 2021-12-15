import { Navbar, Container, Button } from 'react-bootstrap';
import logo from "../../src/assets/logo.png"
function NavigationBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="64"
              className="d-inline-block align-top"
            />{''}
          </Navbar.Brand>
          <Button variant="primary" size="sm">
    Connect Wallet
  </Button>
        </Container>
      </Navbar>
    </>)
}

export default NavigationBar;
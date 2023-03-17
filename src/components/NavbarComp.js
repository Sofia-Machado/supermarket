import { useLocation } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp() {
  const location = useLocation();

    return ( 
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">SUPERMARKET</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
              activeKey={location.pathname}
            >
              <Nav.Link className={({isActive}) => isActive ? 'active' : ''} href="/">Store</Nav.Link>
              <Nav.Link className={({isActive}) => isActive ? 'active' : ''} href="/about">About</Nav.Link>
            </Nav>
            <Button variant="primary">
              Cart <Badge bg="secondary">9</Badge>
              <span className="visually-hidden">items in the cart</span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}

export default NavbarComp;
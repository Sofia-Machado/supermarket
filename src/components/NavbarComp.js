import { Link, NavLink, useLocation } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp(props) {
  const location = useLocation();
  const cartCount = props.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

    return ( 
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">SUPERMARKET</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
              activeKey={location.pathname}
            >
              <Nav.Link className={({isActive}) => isActive ? ' active' : ''} as={NavLink} to="/">Store</Nav.Link>
              <Nav.Link className={({isActive}) => isActive ? ' active' : ''}  as={NavLink} to="/about">About</Nav.Link>
            </Nav>
            <Nav.Link as={NavLink} to="/cart">
              <Button variant="primary" className="btn-cart">
                Cart <Badge bg="secondary" className='cart-badge'>{cartCount}</Badge>
                <span className="visually-hidden">items in the cart</span>
              </Button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}

export default NavbarComp;
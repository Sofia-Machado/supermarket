import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

function NotFound() {
    return ( 
        <Container>
            <h1>Page Not Found</h1>
            <Row className="justify-content-md-center">
                <Col sm={8} className="success">
                <p>Go back to the <Link to="/">store</Link></p>
                
                <p>Thank you!</p>
                </Col>
                <Col sm={4}>
                    <Image height="300px" rounded src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_550/v1607770215/react-tutorial/supermarket/about.jpg" alt="Hands holding grocery bag"></Image>
                </Col>
            </Row>
        
        </Container>
     );
}

export default NotFound;
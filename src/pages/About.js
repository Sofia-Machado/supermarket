import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import { Col, Row } from 'react-bootstrap';

function About() {
    return ( 
        <Container>
            <h1>About Us</h1>
            <Row className="justify-content-md-center">
                <Col sm={8}>
                <p>We started operations in 2020. We guarantee fresh produce.
                Save time by shopping on our app and we'll deliver the products right to your home.
                We use Stripe to process your payment.</p>
                </Col>
                <Col sm={4}>
                    <Image height="300px" rounded src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_550/v1607770215/react-tutorial/supermarket/about.jpg" alt="Hands holding grocery bag"></Image>
                </Col>
            </Row>
        
        </Container>
     );
}

export default About;
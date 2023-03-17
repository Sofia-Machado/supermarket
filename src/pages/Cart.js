import { Container,Row, Col } from "react-bootstrap";

function Cart() {
    return ( 
        <Container className="container">
            <h1>Cart</h1>
            <Row className="justify-content-md-center">
                <Col sm={8}>
                <p>We started operations in 2020. We guarantee fresh produce.
                Save time by shopping on our app and we'll deliver the products right to your home.
                We use Stripe to process your payment.</p>
                </Col>
                <Col sm={4}>
                    
                </Col>
            </Row>
        
        </Container>
     );
}

export default Cart;
import { Container, Image, Row, Col, Button } from "react-bootstrap";

function Store() {
    return ( 
        <Container>
            <h1>Products</h1>
            <p>Take a look at our products</p>
            <div className="product-container d-inline-flex">
                <div className="product-image-container">
                    <Image className="product-image" fluid src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png" />
                </div>
                <div className="product-text-container" sm={3}>
                    <h2>Cheese</h2>
                    <p>200g cheese block</p>
                </div>
                <div className="product-price-container" sm={1}>
                    <Button>$10</Button>
                </div>
            </div>
            
        </Container>
     );
}

export default Store;
import { useParams, Outlet } from "react-router-dom";
import { Container, Image, Nav } from "react-bootstrap";

function ProductDetails() {
    const params = useParams();

    //fetch using the params id
    //insert outlet

    return ( 
        <Container>
            <div className="product-details-title-image-container">
                <h2>Cheese</h2>
                <Image className="product-image" fluid src="#" />
            </div>
            <Nav variant="tabs" defaultActiveKey="/details">
                <Nav.Item>
                    <Nav.Link href="/details">Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/nutriton">Nutrition</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/storage">Storage</Nav.Link>
                </Nav.Item>
            </Nav>
            <Outlet details={params} />
        </Container>
     );
}

export default ProductDetails;
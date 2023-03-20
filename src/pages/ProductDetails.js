import { useEffect, useState } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import { Container, Image, Nav } from "react-bootstrap";
import useFetch from "../useFetch";

function ProductDetails() {
    const params = useParams();
    console.log(params);
    const { get } = useFetch('https://react-tutorial-demo.firebaseio.com/');
    const [product, setProduct] = useState({});

    useEffect(() => {
        get(`productinfo/id${params.id}.json`)
        .then(data => setProduct(data))
        .catch(error => console.log(error))
    },[])
    //fetch using the params id
    //insert outlet

    return ( 
        <Container>
            <div className="product-details-title-image-container">
                <h2>{product.name}</h2>
                <Image className="product-image" fluid src={product.image} />
            </div>
            <Nav variant="tabs" className="tabs-details">
                <Nav.Item>
                    <Nav.Link className={({isActive}) => isActive ? 'active' : ''} as={NavLink} to="" end>Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={({isActive}) => isActive ? 'active' : ''} as={NavLink} to="nutrition">Nutrition</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={({isActive}) => isActive ? 'active' : ''} as={NavLink} to="storage">Storage</Nav.Link>
                </Nav.Item>
            </Nav>
            <div>
                <Outlet context={product} />
            </div>
        </Container>
     );
}

export default ProductDetails;
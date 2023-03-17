import { useState, useEffect } from "react";
import { Container, Image, Button } from "react-bootstrap";
import useFetch from "../useFetch";

function Store() {
    const [products, setProducts] = useState([]);
    const { get, loading } = useFetch("https://react-tutorial-demo.firebaseio.com/");

    useEffect(() => {
        get("supermarket.json")
        .then(data => setProducts(data))
        .catch(error => error)
    }, [])

    return ( 
        <Container >
            <h1>Products</h1>
            <p>Take a look at our products</p>
            <div className="store-container">
                {products.map((product) => {
                    return (
                    <div className="product-container d-inline-flex">
                        <div className="product-image-container">
                            <Image className="product-image" fluid src={product.image} />
                        </div>
                        <div className="product-text-container" sm={3}>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                        </div>
                        <div className="product-price-container" sm={1}>
                            <Button>${product.price}</Button>
                        </div>
                    </div>
                    )
                })}
            </div>
            
        </Container>
     );
}

export default Store;
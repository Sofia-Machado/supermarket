import { useState, useEffect } from "react";
import { Container, Image, Button } from "react-bootstrap";
import Product from "../components/Product";
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
        <Container>
            <h1>Products</h1>
            <p>Take a look at our products</p>
            <div className="store-container">
            {loading && <h2>Loading...</h2>}
                {products.map((product) => {
                    return (
                    <Product key={product.id} details={product} ></Product>
                    )
                })}
            </div>
            
        </Container>
     );
}

export default Store;
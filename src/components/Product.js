import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product({details}) {
    return ( 
        <div className="product-container d-inline-flex">
            <div className="product-image-container">
                <Link to={`/products/${details.id}`}><Image className="product-image" fluid src={details.image} /></Link>
            </div>
            <div className="product-text-container" sm={3}>
                <h2>{details.name}</h2>
                <p>{details.description}</p>
            </div>
            <div className="product-price-container" sm={1}>
                <Button>${details.price}</Button>
            </div>
        </div>
     );
}

export default Product;
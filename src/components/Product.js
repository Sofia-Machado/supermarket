import { Image, Button } from "react-bootstrap";

function Product({details}) {
    return ( 
        <div className="product-container d-inline-flex">
            <div className="product-image-container">
                <Image className="product-image" fluid src={details.image} />
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
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product(props) {
    const { details } = props;

    const productFromCart = props.cart.find(
      (product) => product.id === details.id
    );
    const quantity = productFromCart ? productFromCart.quantity : 0;  

    return ( 
        <div className="product-container product d-inline-flex">
            <div className="product-image-container">
                <Link to={`/products/${details.id}`}><Image className="product-image" fluid src={details.image} alt={details.name} /></Link>
                {quantity > 0 && (
                    <div className="product-quantity-container">
                    <div className="product-quantity">{quantity}</div>
                    </div>
                )}
            </div>
            <div className="product-text-container" sm={3}>
                <h2>{details.name}</h2>
                <p>{details.description}</p>
            </div>
            <div className="product-checkout">
                <div>
                    {quantity > 0 && (
                        <Button onClick={() => props.onProductDelete(details.id)} className="product-delete">x</Button>
                    )}
                </div>
                <div className="product-price-container" sm={1}>
                    <Button onClick={() => props.onProductAdd(details)}>${details.price}</Button>
                </div>
            </div>
        </div>
     );
}

export default Product;
import { useOutletContext } from "react-router-dom";
import { Button } from "react-bootstrap";

function ProductInfo({onProductAdd}) {
    const product = useOutletContext();
    
    return ( 
        <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per piece.
      </p>
      <Button onClick={() => onProductAdd(product)}>${product.price}</Button>
    </>
     );
}

export default ProductInfo;
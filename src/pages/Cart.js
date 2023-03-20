import { Button, Container, Form, Table} from "react-bootstrap";
import { useState } from "react";
import {loadStripe} from "@stripe/stripe-js";

export default function Cart({ cart }) {
  const [email, setEmail] = useState('');
  const stripeLoadedPromise = loadStripe('pk_test_51HsqkCGuhXEITAut89vmc4jtjYd7XPs8hWfo2XPef15MFqI8rCFc8NqQU9WutlUBsd8kmNqHBeEmSrdMMpeEEyfT00KzeVdate');
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(email);
    const lineItems = cart.map(product => {
      return {price: product.price_id, quantity: product.quantity }
    })
    
    stripeLoadedPromise.then(stripe => {
      stripe.redirectToCheckout({
         lineItems: lineItems,
          mode: "payment",
          successUrl: 'http://localhost:3000/',
          customerEmail: email
      })
      .then(response => console.log(response.error))
      .catch(error => console.log(error))
    })
  

  }

  return (
    <Container className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.length === 0 && (
          <p>You have not added any product to your cart yet.</p>
        )}
        {cart.length > 0 && (
          <>
            <Table className="table table-cart">
              <thead>
                <tr>
                  <th width="25%" className="th-product">
                    Product
                  </th>
                  <th width="20%">Unit price</th>
                  <th width="10%">Quanity</th>
                  <th width="25%">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <img
                          src={product.image}
                          width="30"
                          height="30"
                          alt=""
                        />{" "}
                        {product.name}
                      </td>
                      <td>${product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <strong>${product.price * product.quantity}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2"></th>
                  <th className="cart-highlight">Total</th>
                  <th className="cart-highlight">${totalPrice}</th>
                </tr>
              </tfoot>
            </Table>
            <form className="pay-form" onSubmit={handleFormSubmit}>
              <p>
                Enter your email and then click on pay and your products will be
                delivered to you on the same day!
              </p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" autoComplete="email"  onChange={(e) => setEmail(e.target.value)} required />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            </Form>
              <Button type="submit">Pay</Button>
            </form>
          </>
        )}
      </div>
    </Container>
  );
}
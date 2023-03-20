import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import About from './pages/About';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import ProductInfo from './components/ProductInfo';
import ProductNutrition from './components/ProductNutrition';
import ProductStorage from './components/ProductStorage';
import NavbarComp from './components/NavbarComp';
import Store from './pages/Store';
import './App.css';
import NotFound from './pages/NotFound';

function App() {

  const [cart, setCart] = useState([]);
  
  function handleProductAdd(newProduct) {
    // check if item exists
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );
    if (existingProduct) {
      // increase quantity
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      // product is new to the cart
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }
  }

  function handleProductDelete(id) {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }

  return (
    <BrowserRouter>
      <NavbarComp cart={cart} />
      <Routes>
        <Route path='/' element={<Store cart={cart} onProductAdd={handleProductAdd} onProductDelete={handleProductDelete} />}/>
        <Route path="/products/:id/" element={<ProductDetails onProductAdd={handleProductAdd} />}>
          <Route path="" element={<ProductInfo onProductAdd={handleProductAdd} />}></Route>
          <Route path="nutrition" element={<ProductNutrition />}></Route>
          <Route path="storage" element={<ProductStorage />}></Route>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;

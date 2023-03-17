import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Cart from './pages/Cart';
import NavbarComp from './components/NavbarComp';
import Store from './pages/Store';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path='/' element={<Store />}/>
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;

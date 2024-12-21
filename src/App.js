import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Home/Footer';
import LoginRegister from './pages/LoginRegister';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import 'animate.css';
import CartPage from './Context/CartPage';
import CheckoutPage from './Context/CheckoutPage';
import { CartProvider } from './Context/CartContext'; // Import CartProvider




function App() {
  return (
    <CartProvider>
    <Router> {/* Wrap your app with Router */}
      <div className="App">
        <Navbar /> {/* Navbar will be visible across all pages */}
        
        <Routes> {/* Use Routes instead of Switch */}
          {/* Define routes for different pages */}
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/login" element={<LoginRegister />} /> {/* Login/Register page */}
          <Route path = "/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} /> {/* Add dynamic route */}
          <Route path = "/contacts" element={<ContactPage />} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
        </Routes>
        
        <Footer /> {/* Footer will be visible across all pages */}
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;

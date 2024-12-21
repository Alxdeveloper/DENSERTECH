import React from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css';
import { useCart } from '../Context/CartContext'; // Import CartContext

const products = [
  {
    id: 1,
    title: "Software Development",
    description: "Custom software solutions for businesses to streamline processes.",
    price: "$2000",
    image: "https://via.placeholder.com/150?text=Software+Dev",
  },
  {
    id: 2,
    title: "Business Websites",
    description: "Professional websites to elevate your online presence.",
    price: "$1500",
    image: "https://via.placeholder.com/150?text=Business+Websites",
  },
  {
    id: 3,
    title: "POS Systems",
    description: "Point of Sale systems to improve sales and inventory management.",
    price: "$2500",
    image: "https://via.placeholder.com/150?text=POS+Systems",
  },
  {
    id: 4,
    title: "CCTV Installation",
    description: "Security systems for business and home with remote monitoring.",
    price: "$1000",
    image: "https://via.placeholder.com/150?text=CCTV+Installation",
  },
  {
    id: 5,
    title: "Drone Programming",
    description: "Develop custom drone software for various applications.",
    price: "$3000",
    image: "https://via.placeholder.com/150?text=Drone+Programming",
  },
  {
    id: 6,
    title: "Mobile App Development",
    description: "Create mobile apps for Android and iOS platforms.",
    price: "$2500",
    image: "https://via.placeholder.com/150?text=Mobile+App",
  },
];

const ProductPage = () => {
  const { addToCart } = useCart(); // Access addToCart function from context

  return (
    <div className="product-page">
      <h2 className="page-title">Our Products</h2>
      <div className="product-cards-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button
                className="product-btn"
                onClick={() => addToCart(product)} // Add product to cart
              >
                Add to Cart
              </button>
              <Link to={`/product/${product.id}`} className="product-btn">Learn More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

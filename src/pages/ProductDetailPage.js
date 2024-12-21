import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import './ProductDetailPage.css';  // Add styling as needed

const ProductDetailPage = () => {
  const { id } = useParams();  // Get product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the ID from the route
    const fetchProductDetails = () => {
      // Ideally, fetch data from an API. For now, we're using hardcoded products.
      const products = [
        {
          id: 1,
          title: "Software Development",
          description: "Custom software solutions for businesses to streamline processes.",
          price: "$2000",
          image: "https://via.placeholder.com/150?text=Software+Dev",
          detailedDescription: "We provide custom software solutions tailored to your business needs. Our team works closely with clients to deliver high-quality solutions for all types of projects."
        },
        {
          id: 2,
          title: "Business Websites",
          description: "Professional websites to elevate your online presence.",
          price: "$1500",
          image: "https://via.placeholder.com/150?text=Business+Websites",
          detailedDescription: "Get a professional, responsive website designed to enhance your brand's online presence. We specialize in building business websites that generate leads."
        },
        // More products...
      ];

      const selectedProduct = products.find(product => product.id === parseInt(id));
      setProduct(selectedProduct);
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-page">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="product-detail-image" />
      <p>{product.detailedDescription}</p>
      <p><strong>Price:</strong> {product.price}</p>
      {/* Add any additional details here */}
    </div>
  );
};

export default ProductDetailPage;

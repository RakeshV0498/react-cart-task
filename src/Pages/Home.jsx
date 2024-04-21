import { useState } from "react";
import Navbar from "../Components/Navabar/Navbar";
import ProductCard from "../Components/Product/Product";
import products from "../Data";

const Home = () => {
  // State and function for managing cart
  const [cart, setCart] = useState({});

  const updateCart = (productId, count) => {
    setCart((prevCart) => {
      return {
        ...prevCart,
        [productId]: count,
      };
    });
  };

  // Correct rendering of Navbar component
  return (
    <>
      <Navbar />
      <style>
        {`
        .products-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 20px;
        }
        `}
      </style>

      <div className="products-container">
        {/* Render ProductCard components */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              ...product,
              description:
                product.description.length > 30
                  ? `${product.description.slice(0, 30)}..`
                  : product.description,
            }}
            cart={cart} // Pass cart state
            updateCart={updateCart} // Pass updateCart function
          />
        ))}
      </div>
    </>
  );
};

export default Home;

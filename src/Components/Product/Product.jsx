import { useState } from "react";
import "./Product.css";
import PropTypes from "prop-types";

const ProductCard = ({ product, cart, updateCart }) => {
  const { id, title, description, price, brand, image } = product;
  const [show, setShow] = useState(false);

  const handleCart = () => {
    setShow(!show);
    updateCart(id, cart[id] ? cart[id] + 1 : 1);
  };

  const handleCartIncrement = () => {
    updateCart(id, cart[id] ? cart[id] + 1 : 1);
    setShow(true);
  };

  const handleCartDecrement = () => {
    updateCart(id, cart[id] ? cart[id] - 1 : 0);
    if (cart[id] === 1) setShow(false);
  };

  return (
    <article id={id} className="product-card container">
      <img
        src={image}
        alt={title}
        className="product-image"
        width={"250px"}
        height={"250px"}
      />
      <section className="product-details">
        <p className="product-brand">Brand: {brand}</p>
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">Price: ${price}</p>
        <StarRating product={product} />
        {!show ? (
          <button onClick={handleCart} className="btn btn-primary">
            Add to cart
          </button>
        ) : (
          <div className="btn-container">
            <button onClick={handleCartDecrement} className="btn btn-dec">
              -
            </button>
            <p className="item-count">{cart[id]}</p>
            <button onClick={handleCartIncrement} className="btn btn-inc">
              +
            </button>
          </div>
        )}
      </section>
    </article>
  );
};

function StarRating({ product }) {
  const stars = [];

  const rating = Number(product.rating);

  // Calculate the number of full stars
  const fullStars = Math.floor(rating);

  // Calculate whether to display a half star
  const hasHalfStar = rating % 1 !== 0;

  // Loop to render full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fa fa-star" aria-hidden="true"></i>);
  }

  // Add half star if applicable
  if (hasHalfStar) {
    stars.push(
      <i key="half" className="fa fa-star-half-stroke" aria-hidden="true"></i>
    );
  }

  // Fill remaining stars with empty stars
  for (let i = stars.length; i < 5; i++) {
    stars.push(
      <i key={i} className="fa-regular fa-star" aria-hidden="true"></i>
    );
  }

  return (
    <div className="star-rating">
      <span className="content-title">Rating:</span>{" "}
      <span className="content-star">{stars}</span>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  cart: PropTypes.object.isRequired,
  updateCart: PropTypes.func.isRequired,
};

StarRating.propTypes = {
  product: PropTypes.object,
  rating: PropTypes.number,
};

export default ProductCard;

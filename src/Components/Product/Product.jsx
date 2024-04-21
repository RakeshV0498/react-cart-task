/* eslint-disable react/prop-types */
import "./Product.css";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const { id, title, description, price, brand, image } = product;

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
        <button className="btn btn-primary">Add to cart</button>
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
    discountPercentage: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;

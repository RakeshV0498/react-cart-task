import Navbar from "../Components/Navabar/Navbar";
import ProductCard from "../Components/Product/Product";
import products from "../Data";

const Home = () => {
  <Navbar />;
  return (
    <>
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
          />
        ))}
      </div>
    </>
  );
};

export default Home;

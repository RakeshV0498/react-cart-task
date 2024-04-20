import "./Navbar.css";
import logo from "../../assets/cart-logo.svg";

const Navbar = () => {
  return (
    <>
      <header className="navbar navbar-light bg-light mx-auto mb-5">
        <a href="#">
          <img
            className="img-fluid"
            src={logo}
            alt="logo shopping cart"
            width="50px"
          />
        </a>
        <p className="h1">My Shop</p>
        <button className="btn btn-primary px-4 py-3 rounded font-weight-bold">
          View Cart
        </button>
      </header>
    </>
  );
};

export default Navbar;

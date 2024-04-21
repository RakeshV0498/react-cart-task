import "./Navbar.css";
import logo from "../../assets/cart-logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="navbar navbar-light bg-light mb-5">
        <Link to={"/"}>
          <img
            className="img-fluid"
            src={logo}
            alt="logo shopping cart"
            width="50px"
          />
        </Link>
        <p className="h1">My Shop</p>
        <button className="btn btn-primary ">View Cart</button>
      </header>
    </>
  );
};

export default Navbar;

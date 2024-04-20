import "./Navbar.css";
import logo from "../../assets/cart-logo.svg";

const Navbar = () => {
  return (
    <>
      <header className="navbar navbar-light bg-light mb-5">
        <a href="#">
          <img
            className="img-fluid"
            src={logo}
            alt="logo shopping cart"
            width="50px"
          />
        </a>
        <p className="h1">My Shop</p>
        <button className="btn btn-primary ">View Cart</button>
      </header>
    </>
  );
};

export default Navbar;

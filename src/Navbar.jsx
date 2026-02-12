import { Link } from "react-router-dom";

function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <h2 className="logo">Meesho Clone</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/delivery">Delivery</Link>
        <button onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
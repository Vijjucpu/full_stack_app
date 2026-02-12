import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./login";
import Home from "./home";
import Cart from "./cart";
import Wishlist from "./wishlist";
import Delivery from "./Delivery";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogin = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      {user && <Navbar onLogout={handleLogout} />}

      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/" element={user ? <Home /> : <Login onLogin={handleLogin} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </>
  );
}

export default App;
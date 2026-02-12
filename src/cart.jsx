import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2>My Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="products-grid">
          {cart.map((item) => (
            <div key={item.id} className="card">
              <img src={item.thumbnail} alt={item.title} />
              <h4>{item.title}</h4>
              <p>₹ {item.price}</p>

              <div className="button-group">
                <button onClick={() => removeItem(item.id)}>
                  Remove ❌
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
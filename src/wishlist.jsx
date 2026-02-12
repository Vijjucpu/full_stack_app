import { useState } from "react";

function Wishlist() {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const removeItem = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2>My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div className="products-grid">
          {wishlist.map((item) => (
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

export default Wishlist;
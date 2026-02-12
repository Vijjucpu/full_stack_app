import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Added to Cart ✅");
  };

  const addToWishlist = (product) => {
    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    alert("Added to Wishlist ❤️");
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
return (
  <div className="container">
    {/* 🔍 Search Bar */}
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />
    </div>

    {/* 🛍 Products */}
    <div className="products-grid">
      {filteredProducts.map((product) => (
        <div key={product.id} className="card">
          <img src={product.thumbnail} alt={product.title} />
          <h4>{product.title}</h4>
          <p>₹{product.price}</p>
          <p>⭐ {product.rating}</p>

          {/* ✅ Button Group Added */}
          <div className="button-group">
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>

            <button onClick={() => addToWishlist(product)}>
              Wishlist
            </button>
          </div>

        </div>
      ))}
    </div>
  </div>
 );
}
export default Home;
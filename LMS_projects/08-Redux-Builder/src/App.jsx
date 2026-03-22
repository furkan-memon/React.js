import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./features/cartSlice";

function App() {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [showCart, setShowCart] = useState(false); // ✅ NEW

  // 🔍 Filter
  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🔃 Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <h1>🛍 Product Store</h1>
        <div
          className="cart-badge"
          onClick={() => setShowCart(true)} // ✅ OPEN
        >
          Cart: {cart.length}
        </div>
      </div>

      {/* Overlay */}
      {showCart && (
        <div className="overlay" onClick={() => setShowCart(false)}></div>
      )}

      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid">
        {sorted.length === 0 ? (
          <p className="no-data">No products found</p>
        ) : (
          sorted.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="card-content">
                <h3>{item.name}</h3>
                <p className="category">{item.category}</p>
                <p className="price">₹{item.price}</p>
                <p className="rating">⭐ {item.rating}</p>

                <button onClick={() => dispatch(addToCart(item))}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Cart Drawer */}
      <div className={`cart ${showCart ? "open" : ""}`}>
        <div className="cart-header">
          <h2>🛒 Cart</h2>
          <button
            className="close-btn"
            onClick={() => setShowCart(false)}
          >
            ✖
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="empty">Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <span>{item.name}</span>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                ❌
              </button>
            </div>
          ))
        )}

        <div className="total">
          Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}
        </div>
      </div>
    </div>
  );
}

export default App;
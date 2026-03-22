import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./features/productsSlice";
import { addToCart, removeFromCart } from "./features/cartSlic";

function App() {
  const dispatch = useDispatch();
  const { data: products, loading } = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filtered = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <h1>🔥 Firebase Store</h1>
        <div className="cart-badge" onClick={() => setShowCart(true)}>
          Cart: {cart.length}
        </div>
      </div>

      {/* Overlay */}
      {showCart && (
        <div className="overlay" onClick={() => setShowCart(false)} />
      )}

      {/* Search */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Loading */}
      {loading && <h2 className="loading">Loading...</h2>}

      {/* Products */}
      <div className="grid">
        {filtered.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="card-content">
              <h3>{item.title}</h3>
              <p className="category">{item.category}</p>
              <p className="price">₹{item.price}</p>

              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Drawer */}
      <div className={`cart ${showCart ? "open" : ""}`}>
        <div className="cart-header">
          <h2>🛒 Cart</h2>
          <button onClick={() => setShowCart(false)}>✖</button>
        </div>

        {cart.length === 0 ? (
          <p className="empty">Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <span>{item.title}</span>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                ❌
              </button>
            </div>
          ))
        )}

        <div className="total">
          Total: ₹
          {cart.reduce((sum, item) => sum + item.price, 0)}
        </div>
      </div>
    </div>
  );
}

export default App;
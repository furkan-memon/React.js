import React, { useState } from "react";

const productsData = [
  {
    id: 1,
    name: "iPhone 14",
    price: 79999,
    category: "Electronics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiZjoX6hH8GycAK9OLs6IweXVZ2zOnGInIg&s"
  },
  {
    id: 2,
    name: "Nike Air Max",
    price: 5999,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 2999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 4999,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
  },
  {
    id: 5,
    name: "Backpack",
    price: 1499,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
  }
];

export default function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const filtered = productsData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    if (sort === "az") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="app">
      <h1 className="title">🛍 Product Store</h1>

      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder=" Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
          <option value="az">Name: A → Z</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid">
        {sorted.length > 0 ? (
          sorted.map((item) => (
 <div className="card" key={item.id}>
  <div className="wishlist">❤</div>

  <img src={item.image} alt={item.name} />

  <div className="card-content">
    <h3>{item.name}</h3>
    <p className="category">{item.category}</p>
    <p className="price">₹{item.price}</p>

    <button>Add to Cart</button>
  </div>
</div>
          ))
        ) : (
          <p className="no-data">No products found</p>
        )}
      </div>
    </div>
  );
}
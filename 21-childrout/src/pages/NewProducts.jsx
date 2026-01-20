import { useEffect, useState } from "react";

function NewProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(p => p.rating?.rate > 3);
        setProducts(filtered);
      });
  }, []);

  return (
    <div className="grid">
      {products.map(p => (
        <div className="card new" key={p.id}>
          <img src={p.image} alt={p.title} />
          <h3>{p.title}</h3>
          <p className="price">₹ {p.price}</p>
          <span className="badge new">New</span>
        </div>
      ))}
    </div>
  );
}

export default NewProducts;

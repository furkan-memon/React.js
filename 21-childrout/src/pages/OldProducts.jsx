import { useEffect, useState } from "react";

function OldProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(p => p.rating?.rate < 3);
        setProducts(filtered);
      });
  }, []);

  return (
    <>
        
    <div className="grid">
      {products.map(p => (
        <div className="card old" key={p.id}>
          <img src={p.image} alt={p.title} />
          <h3>{p.title}</h3>
          <p className="price">₹ {p.price}</p>
          <span className="badge old">Old</span>
        </div>
      ))}
    </div>
    </>
  );
}

export default OldProducts;

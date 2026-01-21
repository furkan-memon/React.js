import { Link ,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductHome() {
   const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    
  const handleChange = (e) => {
    if (e.target.value) {
      navigate(e.target.value);
    }
  };
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
          setProducts(data);
        });
    }, []);

  return (
    <>
     <div className="option-dropdown">
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>
          Select Product Type
        </option>
        <option value="new">New Products</option>
        <option value="old">Old Products</option>
      </select>
    </div>
   
    <div className=" grid">
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

export default ProductHome;

import { Link } from "react-router-dom";

function ProductHome() {
  return (
    <div className="option-grid">
      <Link to="new" className="option-card">
        <h2>New Products</h2>
        <p>Latest items available now</p>
      </Link>

      <Link to="old" className="option-card old">
        <h2>Old Products</h2>
        <p>Previously listed products</p>
      </Link>
    </div>
  );
}

export default ProductHome;

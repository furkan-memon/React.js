import { Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="container">
      <h1 className="title">Product Explorer</h1>
      <Outlet />
    </div>
  );
}

export default Products;

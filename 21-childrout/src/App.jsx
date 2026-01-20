import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import NewProducts from "./pages/NewProducts";
import OldProducts from "./pages/OldProducts";
import ProductHome from "./pages/ProductHome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/products" element={<Products />}>
          <Route index element={<ProductHome />} />  
          <Route path="new" element={<NewProducts />} />
          <Route path="old" element={<OldProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

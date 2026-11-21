import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home - Go to /products/1</h1>} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
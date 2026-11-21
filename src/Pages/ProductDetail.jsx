import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newPrice, setNewPrice] = useState("");
  const [message, setMessage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("not found");
        const data = await res.json();
        setProduct(data);
        setNewPrice(data.price);
      } catch {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  async function handleSave() {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: Number(newPrice) }),
    });
    const updated = await res.json();
    // Update state directly so page changes without reload
    setProduct({ ...product, price: updated.price });
    setMessage("Price updated successfully!");
  }

  async function handleDelete() {
    // Confirm stops accidental delete
    const ok = window.confirm(`Delete ${product.title}?`);
    if (!ok) return;
    await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" });
    navigate("/products");
  }

  if (loading) return <p className="loading">Loading...</p>;
  if (!product) return <div className="not-found"><h2>Product not found</h2><Link to="/products">Back to Menu</Link></div>;

  return (
    <div className="layout">
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <h2>🐻 POLAR</h2>
        <p>📊 Dashboard</p>
        <p className="active">🏷️ Menu</p>
        <p>🧾 Orders</p>
      </aside>
      <main className="main">
        <Link to="/products" className="back">← Back to Menu</Link>
        <h2>{product.title}</h2>
        <div className="card">
          <img src={product.image} alt={product.title} className="product-img" />
          <div className="details">
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Current Price: <b>${product.price}</b></p>
            <label>Edit Price</label><br />
            <input type="number" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} className="input" />
            <button onClick={handleSave} className="btn-green">Save Price</button>
            {message && <p className="success">{message}</p>}
            <br />
            <button onClick={handleDelete} className="btn-delete">Delete Product</button>
          </div>
        </div>
      </main>
    </div>
  );
}
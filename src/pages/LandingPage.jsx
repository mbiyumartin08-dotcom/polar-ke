
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <span className="hero-pill">New season drop is here</span>
          <h1>Everyday sneakers, built for every step.</h1>
          <p>
            Sole Hub is your one-stop shop for running, casual, hiking and skate
            shoes. Browse the full range, add new styles and manage prices in
            one simple admin portal.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">Browse Products</Link>
            <Link to="/products/new" className="btn btn-outline">Add a Product</Link>
          </div>
        </div>
        <div className="hero-visual">
          <img src="https://placehold.co/520x440?text=Sole+Hub" alt="Sneakers" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="eyebrow">ABOUT THE SITE</span>
          <h2>What this portal does</h2>
        </div>
        <div className="benefit-row">
          <div className="card benefit-card">
            <h3>Browse and search</h3>
            <p>See every product and find one fast with live search.</p>
          </div>
          <div className="card benefit-card">
            <h3>Add new products</h3>
            <p>Use the form to add a new pair to the store in seconds.</p>
          </div>
          <div className="card benefit-card">
            <h3>Edit and remove</h3>
            <p>Open any product to change its price or delete it.</p>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div>
          <h2>Ready to manage your store?</h2>
          <p>Add products, update prices and keep everything in one place.</p>
        </div>
        <Link to="/products" className="btn btn-white">Go to Products</Link>
      </div>
    </>
  );
}
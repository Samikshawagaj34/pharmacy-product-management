import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <ul>
        <li><Link to="/products/tablets">Tablets</Link></li>
        <li><Link to="/products/creams">Ointments</Link></li>
        <li><Link to="/products/syrups">Syrups</Link></li>
        <li><Link to="/products/drops">Drops</Link></li>
      </ul>
    </div>
  );
}

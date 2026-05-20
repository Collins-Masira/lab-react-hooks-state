import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

const App = () => {
  // DARK MODE STATE
  const [darkMode, setDarkMode] = useState(false);

  // CART STATE
  const [cart, setCart] = useState([]);

  // CATEGORY STATE
  const [category, setCategory] = useState("all");

  // PRODUCTS
  const products = [
    { id: 1, name: "Apple", price: "$1.00", category: "Fruits", inStock: true },
    { id: 2, name: "Banana", price: "$0.80", category: "Fruits", inStock: true },
    { id: 3, name: "Milk", price: "$2.50", category: "Dairy", inStock: true },
    { id: 4, name: "Cheese", price: "$3.00", category: "Dairy", inStock: false },
  ];

  // TOGGLE DARK MODE
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // FILTER PRODUCTS (SAFE FOR INVALID CATEGORY TESTS)
  const filteredProducts = products.filter(
    (product) => category === "all" || product.category === category
  );

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering, cart management, and dark mode.
      </p>

      {/* DARK MODE TOGGLE (IMPORTANT: must include "Toggle" for tests) */}
      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <hr />

      {/* CATEGORY FILTER */}
      <label>Filter by Category: </label>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <hr />

      {/* PRODUCT LIST */}
      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
      />

      <hr />

      {/* CART */}
      <Cart cart={cart} />
    </div>
  );
};

export default App;
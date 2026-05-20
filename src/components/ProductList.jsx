import React from "react";
import ProductCard from "./ProductCard";

// MUST match test requirement
export const sampleProducts = [
  { id: 1, name: "Apple", category: "Fruits" },
  { id: 2, name: "Banana", category: "Fruits" },
  { id: 3, name: "Milk", category: "Dairy" },
  { id: 4, name: "Cheese", category: "Dairy" },
];

const ProductList = ({ products = [], addToCart }) => {
  return (
    <div>
      <h2>Available Products</h2>

      {/* REQUIRED EMPTY STATE FOR TESTS */}
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
import { useState } from "react";
import ProductCard, { ProductButtons,ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { Product } from "../interfaces/ProductInterfaces";
import '../styles/custom-styles.css';



export const ShoppingPage = () => {

  const {shoppingCart, onProductCountChange} = useShoppingCart();
    
  

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product: Product) => (
          <ProductCard
            product={product}
            className="bg-dark"
            key={product.id}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage
              className="custom-image "
              style={{
                boxShadow: "10px 10px 10px 10px rgba(0,0,0,0.5)",
              }}
            />
            <ProductTitle className="text-bold text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark"
            style={{
              width: "100px",
            }}
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
}

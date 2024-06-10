import React from "react";
import Product from "../components/Products";
import "./App.css";
import { useSelector } from "react-redux";


function App() {
  const productsList = useSelector((state) => state.products)
  return (
    <div className="products-container">
      {productsList.map(({ title, rating, price, image }) => {
        return (
          <Product
            key={title}
            title={title}
            rating={rating.rate}
            price={price}
            imageUrl={image}
          />
        );
      })}
    </div>
  );
}

export default App;

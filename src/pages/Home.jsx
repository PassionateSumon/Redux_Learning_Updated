import React from 'react'
import Product from "../components/Products";
import { useSelector } from "react-redux";

function Home() {
  const productsList = useSelector((state) => state.products)
  return (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => {
        return (
          <Product
            key={id}
            productId={id}
            title={title}
            rating={rating.rate}
            price={price}
            imageUrl={image}
          />
        );
      })}
    </div>
  )
}

export default Home
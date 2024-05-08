import React from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

interface item {
  title: string;
  price: number;
  image: string;
  id: number;
}

const Product = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const items: item[] = response.data;
  return (
    <div className="p-8 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-stone-200 ">
      {items.map((i) => (
        <ProductCard
          id={i.id}
          key={i.id}
          img={i.image}
          title={i.title}
          price={i.price}
        />
      ))}
    </div>
  );
};

export default Product;

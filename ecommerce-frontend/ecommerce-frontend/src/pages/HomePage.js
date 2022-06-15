import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";
import { getProducts } from "../components/uiApi";
const HomePage = () => {
  const [productsByArrival, setProdctsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProducts = () => {
    getProducts("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProdctsByArrival(data);
      }
    });
  };
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Navbar />
      <Carousel />
      <HomeContent />
      <div className="container-fluid">
        <div className="my-2 shadow p-2">
          <h2 className="text-center">Latest Products</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {productsByArrival.map((product, i) => (
            <Card key={i} item={product} /> //item is a self made attribute for props instead of item you can write anything that makes sense
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;

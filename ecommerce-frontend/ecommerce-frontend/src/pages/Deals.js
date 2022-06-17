import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getFilteredProducts, allcategory } from "../components/uiApi";
import CheckBox from "../components/CheckBox";
import { prices } from "../components/fixedPrice";
import RadioBox from "../components/RadioBox";
import Card from "../components/Card";
const Deals = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(8);
  const [skip, setSkip] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);
  const [size, setSize] = useState(0);

  const init = () => {
    allcategory().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    init();
    loadFilteredResults(skip, limit, myFilters.filters);
  }, []);

  const handleFilters = (filters, filterBy) => {
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;
    if (filterBy === "product_price") {
      let priceValue = handlePrice(filters);
      newFilters.filters[filterBy] = priceValue;
    }
    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };
  const handlePrice = (value) => {
    const data = prices;
    let array = [];
    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };

  const loadFilteredResults = (newFilters) => {
    getFilteredProducts(skip, limit, newFilters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults(data.product);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const loadMore = () => {
    let toSkip = skip + limit;
    getFilteredProducts(toSkip, limit, myFilters.filters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults([...filteredResults, ...data.product]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };
  const loadMoreButton = () => {
    return (
      size >= 0 &&
      size >= limit && (
        <center>
          <br />
          <button onClick={loadMore} className="btn btn-primary">
            Load More Products
          </button>
        </center>
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <h2>
          <marquee behavior="alternate" className="text-dark">
            Offers and Deals !!!!!!!
          </marquee>
        </h2>

        <div className="row mt-5 mb-3 mr-4">
          <div
            className="col-md-2 p-2 ms-3"
            style={{ backgroundColor: "#22b8cf" }}
          >
            <div
              style={{
                backgroundColor: "#66d9e8",
                borderRadius: "8px",
                color: "#212529",
              }}
            >
              <center>
                <h5>Categories</h5>
              </center>
            </div>
            <CheckBox
              categories={categories}
              handleFilters={(filters) => handleFilters(filters, "category")}
            />
            <div
              style={{
                backgroundColor: "#66d9e8",
                borderRadius: "8px",
                color: "#212529",
              }}
            >
              <center>
                <h5>Price Range</h5>
              </center>
            </div>
            <RadioBox
              prices={prices}
              handleFilters={(filters) =>
                handleFilters(filters, "product_price")
              }
            />
          </div>
          <div className="col-md-8">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {filteredResults.map((product, i) => (
                <Card key={i} item={product} /> //item is a self made attribute for props instead of item you can write anything that makes sense
              ))}
            </div>
            {loadMoreButton()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Deals;

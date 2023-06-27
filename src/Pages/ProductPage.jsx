import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { ProductDetails } from "./ProductDetails";
import "./Shop.css";
import ProductFilter from "./ProductFilter";
import Footer from "./Footer";
import { useLocation, useSearchParams } from "react-router-dom";

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);

  let obj = {
    params: {
      category: searchParams.getAll("category"),
      designer: searchParams.getAll("designer").map(el => el.toUpperCase()),
    },
  };

  useEffect(() => {
    getProducts(obj).then((res) => {
      setProducts([...res]);
    });
  }, [location.search]);


  return (
    <div className="product-parent">
      <div className="heading">
        <div className="top-heading">
          <div className="first-heading">
            Women's Fashion & Designer Sale, Up To 70% Off
          </div>
          <div className="second-heading">
            Shop women's fashion sale and compare prices across 500+ stores.
            Save on the largest collection of designer fashion sale for women at
            ModeSens.
          </div>
        </div>
        <div className="bottom-heading">
          <div className="right-heading">Compare 10,000+ products</div>
          <div className="down-heading">Across 500+ of our partner stores</div>
        </div>
      </div>
      <div className="product-body">
        <ProductFilter />
        <div className="grid-container">
          {products?.map((el) => (
            <ProductDetails key={el.id} {...el} el={el} />
          ))}
        </div>
      </div>
      <hr></hr>
      <Footer />
    </div>
  );
};

export default ProductPage;

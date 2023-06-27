import React from "react";
import "./Shop.css";
import { Link } from "react-router-dom";

// import Footer from "./Footer";
export const ProductDetails = ({
  id,
  icon,
  img,
  designer,
  detail,
  price,
  about,
  el,
}) => {
  console.log("products map", el)
  return (
    <Link to={`/product/${id}`} state={{ data: el }}>
      <div className="itemBody">
        <div className="itemChild">
          <icon className="icon">{icon}</icon>
          <img className="productImg" src={img} alt="" />{" "}
        </div>
        <div className="itemText">
          <div className="name">{designer}</div>
          <p className="detail">{detail}</p>
          <p className="price">{price}</p>
          <p className="about">{about}</p>
        </div>
      </div>
    </Link>
  );
};

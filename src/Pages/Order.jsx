import React, { useEffect, useState } from "react";
import "./Shop.css";
import Footer from './Footer';
import {
  CalendarIcon,
  ChevronDownIcon,
  CloseIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { ProductDetails } from "./ProductDetails";
import { getProducts } from "../services/api";
export const Order = () => {
  const location = useLocation();
  const { data } = location.state;
  console.log("order", data);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts([...res]);
    });
  }, []);
  return (
    <>
      <div className="order-main">
        <div className="order-details">
          <div className="order-parent">
            <div className="delivery">Check delivery time & services</div>
            <button className="pincode">ENTER PIN CODE</button>
          </div>
          <div className="order-offers">
            <div className="flex-offer">
              <SunIcon />
              <div>Available Offers</div>
            </div>
            <div className="discount">
              30% Instant Discount on RBL Credit card on a min spend of Rs.
              2,500 TCA
            </div>
            <div className="more">
              Show More <ChevronDownIcon />
            </div>
          </div>
          <div className="order-selected">
            <div>ITEMS SELECTED</div>
            <div className="selected-buttons">
              <button>REMOVE</button>
              <button>MOVE TO WISHLIST</button>
            </div>
          </div>
          <div className="order-items">
            <div className="items">
              <img
                src={data?.img}
                alt="image"
              />
              <div className="items-details">
                <div className="item-name">{data.name}</div>
                <div>Womens maron saree women maroon saree</div>
                <div className="items-change">
                  <div className="size">
                    <div>Size:</div>
                    <select>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                    </select>
                  </div>
                  <div className="qty">
                    <div>Qty:</div>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>
                <div className="item-price">
                  <div>{data.price}</div>
                  <div>10% Off</div>
                </div>
                <div className="items-conditions">
                  <SunIcon />
                  <div>14 Days </div>
                  <div>Return available</div>
                </div>
              </div>
            </div>
            <CloseIcon />
          </div>
        </div>
        <div className="order-bill">
          <div className="coupon">COUPONS</div>
          <div className="coupans">
            <div className="coupans-card">
              <CalendarIcon />
              <div>Apply Coupons</div>
            </div>
            <button className="apply">Apply</button>
          </div>

          <hr></hr>

          <div className="pricee">PRICE DETAILS(2 Items)</div>
          <div>
            <div className="price-detail">
              Total MRP
              <div className="amount">Rs.11,589</div>
            </div>
          </div>

          <div>
            <div className="discount-detail">
              Discount on MRP
              <div className="discount-amount">-Rs.6,577</div>
            </div>
          </div>

          <div>
            <div className="coupon-discount">
              Coupon Discount
              <div className="apply-coupon">Apply Coupon </div>
            </div>
          </div>

          <div>
            <div className="convenience">
              Convenience Fee
              <div className="free">FREE </div>
            </div>
          </div>
          <hr></hr>

          <div>
            <div className="total-amount">
              Total Amount
              <div className="total">Rs.5,012</div>
            </div>
          </div>
          <Link to={"/payment"} state={{ data }}>
            <button className="place-order">PLACE ORDER</button>
          </Link>
        </div>
      </div>
      <div className="similar-products">Similar Products</div>
      <div className="grid-container order-products">
        {products?.map((el) => (
          <ProductDetails key={el.id} {...el} el={el} />
        ))}
      </div>
      <Footer/>
    </>
  );
};

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Women from "../Pages/Women";
import Community from "../Pages/Community";
import ProductPage from "../Pages/ProductPage";
import Product from "../Pages/Product";
import { Order } from "../Pages/Order";
import { Payment } from "../Pages/Payment";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/women" element={<Women />}/>
      <Route path="/community" element={<Community />} />
      <Route path="/shop-new-sale" element={<ProductPage />}></Route>
      <Route path="/shop-new-arrivals" element={<ProductPage />}></Route>
      <Route path="/shop-new-tops" element={<ProductPage />}></Route>
      <Route path="/shop-new-jackets" element={<ProductPage />}></Route>
      <Route path="/shop-new-dresses" element={<ProductPage />}></Route>
      <Route path="/shop-new-pants" element={<ProductPage />}></Route>
      <Route path="/shop-new-shoes" element={<ProductPage />}></Route>
      <Route path="/shop-new-bags" element={<ProductPage />}></Route>
      <Route path="/shop-new-preowned" element={<ProductPage />}></Route>
      <Route path="/product/:id" element={<Product />}/>
      <Route path="/order" element={<Order />}/>
      <Route path="/payment" element={<Payment />}/>
      <Route path="*" element={<h1>Page not found</h1>}></Route>
    </Routes>
  );
}

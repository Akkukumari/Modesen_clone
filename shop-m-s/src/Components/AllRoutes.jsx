import React from "react";
import {Routes , Route} from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Women from "../Pages/Women"


export default function AllRoutes() {
return <Routes>
    <Route path="/" element={<Home/>}  ></Route>
    <Route path="/login" element={<Login/>}  ></Route>
    <Route path="/women" element={<Women/>}  ></Route>
</Routes>
}
import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import SignUp from "./Components/SignUp";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


function App() {
  const {isAuth} =  useSelector((state) => state.authReducer);
  const navigate=useNavigate()


  console.log("isAuth", isAuth);

  useEffect(() => {
    navigate('/')
  }, [isAuth])

  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;

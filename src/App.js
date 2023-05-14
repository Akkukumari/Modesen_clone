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

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setInterval(() => {
      // onOpen();
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <SignUp />
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductModal from "./components/ProductModal";
import Footer from "./components/Footer";
import { Container } from "@chakra-ui/react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container maxW={"full"} bg={"#27272a"} h={"130vh"}>
        <Navbar />
        <ProductModal isOpen={isModalOpen} onClose={closeModal} />
        <Hero openModal={openModal} />
        <Footer />
      </Container>
    </>
  );
}

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
      <Container maxW={"full"} bg={"#27272a"} h={"100vh"} position={"fixed"} top={0} left={0} right={0} bottom={0}>
        <Navbar />
        <ProductModal isOpen={isModalOpen} onClose={closeModal} />
        <Hero openModal={openModal} />
        <Footer />
      </Container>
    </>
  );
}

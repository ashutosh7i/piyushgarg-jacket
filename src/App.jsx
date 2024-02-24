import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductModal from "./components/ProductModal";

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
      <div className="bg-zinc-800 h-screen w-screen">
        <Navbar />
        <ProductModal isOpen={isModalOpen} onClose={closeModal} />
        <Hero openModal={openModal} />
      </div>
    </>
  );
}

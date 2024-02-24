import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Text } from "@chakra-ui/react";


export default function App() {
  return (
    <>
      <div className="bg-zinc-800 h-screen w-screen">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}


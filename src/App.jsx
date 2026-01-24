import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Knitwear from "./components/Knitwear";  
import Footer from "./components/Footer";
import ProductGrid from "./components/ProductGrid";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Knitwear" element={<Knitwear />} />
        <Route path="/shop" element={<ProductGrid/>} />
        <Route path="/Pages" element={<ProductCard />} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;

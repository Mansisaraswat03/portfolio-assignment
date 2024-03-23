"use client";
import { useState } from "react";
import Navbar from "./_components/Navbar";
import About from "./_pages/About";
import Portfolio from "./_pages/Portfolio";
import Footer from "./_components/Footer";
import Preloader from "./_components/Preloader";
import MagicCursor from "./_components/MagicCursor";
import Colors from "./_components/Colors";
import Services from "./_pages/Services";
import HomePage from "./_pages/HomePage";

export default function Home() {
  const [selectedColor, setSelectedColor] = useState("#d1701f");

  const changeColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <Preloader />
      <MagicCursor selectedColor={selectedColor} />
      <Navbar selectedColor={selectedColor}/>
      <Colors changeColor={changeColor} />
      <HomePage />
      <About selectedColor={selectedColor} />
      <Services selectedColor={selectedColor} />
      <Portfolio selectedColor={selectedColor}/>
      <Footer selectedColor={selectedColor} />
    </div>
  );
}
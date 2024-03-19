import Image from "next/image";
import Navbar from "./_components/Navbar";
import About from "./_components/About";
import Portfolio from "./_components/Portfolio";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="md:px-10">
      <Navbar />
      <About />
      <Portfolio/>
      <Footer/>
    </div>
  );
}

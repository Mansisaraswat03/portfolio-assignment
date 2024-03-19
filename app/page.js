import Image from "next/image";
import Navbar from "./_components/Navbar";
import About from "./_components/About";

export default function Home() {
  return (
   <div className="md:px-10">
    <Navbar/>
    <About/>
   </div>
  );
}

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
  return (
    <div>
      <Preloader/>
      <MagicCursor/>
      <Navbar/>
      <Colors/>
      {/* <HomePage/> */}
      <About />
      <Services/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

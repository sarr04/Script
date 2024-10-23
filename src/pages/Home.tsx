import Speakers from "../components/home/Speakers";
import Hero from "../components/home/Hero";
import NavBar from "../components/NavBar";
import Aboutt from "../components/home/Aboutt";
import Join from "../components/home/Join";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <div className="font-primaryRegular">
      <NavBar />
      <Hero />
      <Aboutt />
      <Speakers />
      <Join />

      <Footer></Footer>
    </div>
  );
}

import Hero from "../components/home/Hero";
import NavBar from "../components/NavBar";
import Aboutt from "../components/home/Aboutt";
//import Aboutt from "../components/home/Aboutt";
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero />
      <Aboutt />
    </div>
  );
}

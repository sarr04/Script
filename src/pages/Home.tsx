import Speakers from "../components/home/Speakerss";
import Speakerss from "../components/home/Speakerss";
import Hero from "../components/home/Hero";
import NavBar from "../components/NavBar";
import Aboutt from "../components/home/Aboutt";
import Join from "../components/home/Join";
import Footer from "../components/home/Footer";
import Title from "../components/Title";

export default function Home() {
  return (
    <div className="font-primaryRegular">
      <NavBar
        buttonClass="bg-gradient-to-r from-orange-400 to-pink-500  hover:bg-blue-700"
        imageSrc="/img/Logo.png"
      />

      <Hero />
      <Aboutt />
      <Speakerss color="pin" />
      <Join />

      <div className="flex flex-col items-center text-black bg-white pb-18 pt-28">
        <h3 className="hidden md:block text-center lg:text-3xl">
          EVENT SPONSOR
        </h3>
        <h1 className="lg:text-6xl text-3xl font-bold text-center mb-10">
          OUR PARTNERS
        </h1>

        <div className="container relative">
          <img
            src="/img/ll.png"
            className="absolute w-full max-w-[650px] -z-10"
          />

          <div className="mt-11 mb-16 grid grid-cols-3 gap-4 justify-items-center lg:flex lg:flex-row lg:justify-center lg:space-x-[70px]">
            <img src="/img/Logxo.png" className="h-10 mx-2" />
            <img src="/img/Loxgo.png" className="h-10 mx-2" />
            <img src="/img/paypal.png" className="h-10 mx-2" />
            <img src="/img/visa.png" className="h-10 mx-2" />
            <img src="/oo.png" className="h-10 mx-2" />
            <img src="/img/apple.png" className="h-10 mx-2" />
          </div>
        </div>
      </div>

      <Footer color="orange" />
    </div>
  );
}

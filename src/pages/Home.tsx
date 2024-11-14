import { HashLink as Link } from "react-router-hash-link";
import Speakerss from "../components/home/Speakerss";
import Hero from "../components/home/Hero";
import NavBar from "../components/NavBar";
import Aboutt from "../components/home/Aboutt";
import Join from "../components/home/Join";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <div className="font-primaryRegular">
      <NavBar
        buttonClass="bg-custom hover:bg-blue-700"
        imageSrc="/img/Logo.png"
      />

      <div className="container mx-auto">
        <Hero />
      </div>

      <div className="container mx-auto">
        <Aboutt />
      </div>

      <div className="container mx-auto text-black rounded-2xl bg-white h-150 w-170 relative z-20  ">
        <h4 className="flex justify-center font-bold items-center text-center pt-10 bg-white">
          EVENT CONFERENCE SPEAKERS
        </h4>
        <h2 className="flex justify-center items-center font-bold text-4xl text-center mb-3">
          THE SPEAKERS
        </h2>
        <h4 className="flex justify-center items-center text-center pb-5">
          Meet the visionaries shaping the <br /> future of social media.
        </h4>
      </div>

      <Link smooth to="/#speakers"></Link>
      <div id="speakers" className="container mx-auto ">
        <Speakerss
          speakerss={[
            {
              name: "Ronald Richards",
              work: "influencer",
              followers: "500k Followers",
              img: "/Elliaadffpse 1.png",
            },
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "/img/g.png",
            },
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "public/img/f.png",
            },
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "/img/h.png",
            },
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "/img/b.png",
            },
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "/img/c.png",
            },
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "/img/a.png",
            },
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "/img/d.png",
            },
            {
              name: "aaaa",
              work: "aa",
              followers: "200k folowers",
              img: "/aa.png",
            },
            {
              name: "bbbbbb",
              work: "influencer",
              followers: "10k followers",
              img: "/bb.png",
            },
            {
              name: "ccc",
              work: "content creator",
              followers: "20k followers",
              img: "/cc.png",
            },
            {
              name: "dddddd",
              work: "media",
              followers: "300k followers",
              img: "/dd.png",
            },
            {
              name: "eeeee",
              work: "blogger",
              followers: "20k followers",
              img: "/ee.png",
            },
            {
              name: "fff",
              work: "youtuber",
              followers: "30k followers",
              img: "/ff.png",
            },
            {
              name: "gggg",
              work: "tiktoker",
              followers: "20k followrs",
              img: "/jj.png",
            },
            {
              name: "hhh",
              work: "influncer",
              followers: "3k folloers",
              img: "/mm.png",
            },
            {
              name: "jjj",
              work: "content creator",
              followers: "5k followers",
              img: "/jj.png",
            },
          ]}
          color="pin"
        />
      </div>

      <div className="container mx-auto">
        <Join />
      </div>

      <div className="container mx-auto  flex flex-col items-center text-black bg-white pb-18 pt-28">
        <img src="/img/ll.png" className="absolute left-0  w-full lg:hidden" />
        <h3 className="hidden md:block text-center lg:text-2xl">
          EVENT SPONSOR
        </h3>
        <h1 className="lg:text-4xl text-3xl font-bold text-center mb-10">
          OUR PARTNERS
        </h1>
        <div className="container relative">
          <div className="mt-11 mb-16 grid grid-cols-3 gap-4 justify-items-center lg:flex lg:flex-row lg:justify-center lg:space-x-[70px] mx-4">
            <img src="/img/Logxo.png" className="h-10 mx-2" />
            <img src="/img/Loxgo.png" className="h-10 mx-2" />
            <img src="/img/paypal.png" className="h-10 mx-2" />
            <img src="/img/visa.png" className="h-10 mx-2" />
            <img src="/oo.png" className="h-10 mx-2" />
            <img src="/img/apple.png" className="h-10 mx-2" />
          </div>
        </div>
      </div>

      <div className="relative z-10 ml-6 mr-6 lg:mr-0 lg:ml-0">
        <Footer color="orange" />
      </div>

      <img
        src="/img/ll.png"
        className="absolute left-0 w-full lg:w-full lg:-translate-y-96 -translate-y-28"
      />
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center text-black bg-white pb-18 pt-28">
        <h3 className="text-center text-3xl">EVENT SPONSOR</h3>
        <h1 className="text-6xl font-bold text-center mb-10">OUR PARTNERS</h1>

        <div className="lg:flex lg:flex-row lg:justify-center lg:mt-4 lg:grid-rows-1 lg:space-x-[70px] mt-11 mb-16 sm:grid sm:grid-cols-3 sm:gap-2">
          <img src="/img/Logxo.png" className=" h-10 lg:mx-2 mx-2" />
          <img src="/img/Loxgo.png" className=" h-10 lg:mx-2 mx-2" />
          <img src="/img/paypal.png" className=" h-10 lg:mx-2 mx-2" />
          <img src="/img/visa.png" className=" h-10 lg:mx-2 mx-2" />

          <img src="/oo.png" className=" h-10 lg:mx-2 mx-2" />
          <img src="/img/apple.png" className=" h-10 lg:mx-2 mx-2" />
        </div>
      </div>

      {/* <div className="relative container"> */}
      <img src="/img/ll.png" className="absolute  -z-10 h-[558px] " />

      <div className="  mx-32 flex justify-center gap-80 py-36 my-9 bg-gradient-to-r from-orange-400 to-pink-500 rounded-[4rem] ">
        <div className="  ">
          <img src="/img/Vector.svg " />
          <p className="text-white pt-5 ">Syrian Content Creators Conference</p>
        </div>

        <div className=" ">
          <h3 className="text-white font-bold text-4xl">Follow Us</h3>
          <div className=" flex space-x-4 pt-5">
            <a href="https://www.instagram.com/">
              <img className="w-10" src="/img/insta.svg " />
            </a>
            <a href="">
              <img className="w-10" src="/img/fb.svg" />
            </a>
            <a href="">
              <img className="w-10" src="/img/link.svg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

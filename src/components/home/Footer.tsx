export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center text-black bg-white pb-18 pt-28">
        <h3 className="text-center text-3xl">EVENT SPONSOR</h3>
        <h1 className="text-6xl font-bold text-center">OUR PARTNERS</h1>

        <div className="lg:flex lg:flex-row lg:justify-center lg:mt-4 lg:grid-rows-1 space-x-[28px] sm:grid sm:grid-cols-3 sm:gap-2">
          <img src="/img/Logxo.png" className=" h-10 lg:mx-2 mx-2" />
          <img src="/img/Loxgo.png" className=" h-10 lg:mx-2 mx-2" />
          <img src="/img/paypal.png" className=" h-10 lg:mx-2 mx-2" />
          <img src="/img/visa.png" className=" h-10 lg:mx-2 mx-2" />

          <img src="/oo.png" className=" h-10 lg:mx-2 mx-2" />
          <img src="/img/apple.png" className=" h-10 lg:mx-2 mx-2" />
        </div>
      </div>

      <div className="relative container flex-justify-between">
        <div className="  gap-80  bg-gradient-to-r from-orange-400 to-pink-500 rounded-[2rem] m-28 p-36 ">
          <div className="  ">
            <img src="/img/Vector.svg " />
            <p className="text-white pt-5 ">
              Syrian Content Creators Conference
            </p>
          </div>
          <div className=" ">
            <h3 className="text-white font-bold text-4xl">Follow Us</h3>
            <div className=" flex">
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
        <img src="/img/ll.png" className="absolute top-12 -z-10 h-[558px] " />
      </div>
    </footer>
  );
}

export default function Hero() {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-5xl px-6 lg:px-0">
        <div className="text-white rounded-3xl bg-gradient-to-r from-orange-400 to-pink-500 pb-20 relative z-10">
          <h2 className="text-white justify-center text-center font-bold text-3xl tracking-widest pb-3 pt-12">
            THE PREMIER CONFERENCE
            <br /> FOR SOCIAL MEDIA INFLUENCERS.
          </h2>
          <div className="flex justify-center">
            <p className="text-white font-bold text-xl pl-8 text-center">
              Learn, Connect, and Grow your
              <br /> Influence.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="border border-white px-3 py-2 lg:px-10 font-bold items-center hover:bg-slate-600 rounded-full text-white lg:m-7">
              Book a Ticket
            </button>
          </div>
        </div>

        <div className=" container flex flex-row absolute bottom-12 lg:bottom-0 gap-2 lg:flex-row justify-center items-center lg:space-x-6 lg:space-y-0 space-y-2 lg:-mt-20 mt-5 relative z-20">
          <img
            className="w-[100px] lg:w-[180px] rounded-3xl object-contain"
            src="../public/img/d6.png"
          />

          <img
            className="w-[150px]  lg:w-[250px] rounded-3xl object-contain"
            src="../public/img/dsdsd.png"
          />
          <img
            className="w-[150px]  lg:w-[250px] rounded-3xl object-contain"
            src="../public/img/sit.png"
          />

          <img
            className="w-[100px]  lg:w-[180px] rounded-3xl object-contain"
            src="../public/img/Rectassngle 6.png"
          />
        </div>
      </div>
    </div>
  );
}

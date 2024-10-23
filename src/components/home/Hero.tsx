export default function Hero() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-5xl px-4 lg:px-0">
        <div className="text-white rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500">
          <h2 className="text-white justify-center text-center p-20 font-bold text-3xl">
            THE PREMIER CONFERENCE
            <br /> FOR SOCIAL MEDIA INFLUENCERS.
          </h2>
          <div className="flex justify-center">
            <p className="text-white font-bold text-2xl pl-8">
              Learn, Connect, and Grow your Influence.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="border border-white px-3 mb-4 lg:px-10 lg:py-2 items-center hover:bg-slate-600 rounded-full text-white lg:m-7">
              Book a Ticket
            </button>
          </div>
          \
          <div className="flex flex-col lg:flex-row justify-center items-center lg:space-y-0 space-y-3 lg:space-x-6 lg:ml-0 ml-11 lg:py-10">
            <img
              className="w-60 lg:w-70 lg:h-80 rounded-3xl object-contain"
              src="../public/img/d6.png"
              alt="Image 1"
            />
            <img
              className="w-60 lg:w-70 lg:h-80 rounded-3xl object-contain"
              src="../public/img/dsdsd.png"
              alt="Image 2"
            />
            <img
              className="w-60 lg:w-70 lg:h-80 rounded-3xl object-contain"
              src="../public/img/sit.png"
              alt="Image 3"
            />
            <img
              className="w-60 lg:w-70 lg:h-80 rounded-3xl object-contain"
              src="../public/img/Rectassngle 6.png"
              alt="Image 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

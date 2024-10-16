export default function Hero() {
  return (
    <div className="ml-6 mr-6">
      <div className="   justify-center items-center min-h-screen inline-grid ">
        <div className="  text-white rounded-2xl bg-pink-700 h-150 w-170">
          <h2 className="text-white items-center p-20 font-bold text-3xl">
            THE PREMIER CONFERENCE FOR SOCIAL MEDIA INFLUENCERS.
          </h2>
          <div className="flex justify-center line-clamp-2 ">
            <p
              className=" text-white  font-bold text-2xl  
          "
            >
              Learn, Connect, and Grow your Influence.
            </p>
          </div>
          <div className="flex justify-center items-center  ">
            <button className="border-x-zinc-50 p-5 items-center hover:bg-slate-600 rounded-full  text-white ">
              Book a Ticket
            </button>
          </div>

          <div className="   h-40 w-90 gap-6 grid grid-cols-4 ">
            <img
              inline-block
              className=" w-full h-full object-cover"
              src="../public/img/d6.png "
            />
            <img
              inline-block
              className=" w-full h-full object-cover"
              src="../public/img/dsdsd.png"
            />
            <img
              inline-block
              className=" w-full h-full object-cover"
              src="../public/img/sit.png "
            />
            <img
              inline-block
              className=" w-full h-full object-cover"
              src="../public/img/Rectassngle 6.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

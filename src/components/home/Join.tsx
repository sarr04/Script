export default function Join() {
  return (
    <div className="">
      <div className="lg:container  lg:mx-auto lg:mt-12 ml-7 ">
        <div className="relative flex justify-between items-center gap-12 ">
          <div>
            <h2 className="font-bold text-6xl">READY TO JOIN SCRIPT?</h2>
            <p>
              Don’t miss out on the opportunity to connect,
              <br /> learn, and grow with then top influencers
              <br /> and experts in the industry.
            </p>
            <button className="p-3 ml-1 mr-1 text-white  rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500  border-white ">
              Book A Ticket
            </button>
          </div>

          <img className="w-[200px] lg:w-[465px]" src="../public/img/00.png" />
          <div className="absolute -right-20 -z-30">
            <img className="overflow-hidden " src="../public/img/brand.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

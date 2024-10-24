export default function Join() {
  return (
    <div className="overflow-hidden">
      <div className="container  lg:mx-auto lg:mt-12 ml-7 ">
        <div className="relative flex justify-between items-center gap-12 ">
          <div>
            <h2 className="font-bold text-3xl">READY TO JOIN SCRIPT?</h2>
            <p>
              Don’t miss out on the opportunity to connect,
              <br /> learn, and grow with then top influencers
              <br /> and experts in the industry.
            </p>
            <button className="mt-4 py-1 px-7 ml-2 mr-2  text-white font-semibold rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500  border-white ">
              Book A Ticket
            </button>
          </div>

          <img className=" w-[200px] lg:w-[465px]" src="../public/img/00.png" />
          <div className="absolute -right-20 -z-30">
            <img
              className="overflow-hidden left-59 w[1946.38px] h-[857.928px]"
              src="../public/img/brand.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import ScriptBtn from "../ScriptBtn";
export default function Join(buttonClass) {
  return (
    <div className="  overflow-hidden">
      <div className="  lg:mx-auto lg:mt-12  ">
        <div className="relative lg:flex lg:justify-between items-center mx-5 lg:gap-12 ">
          <div className="container">
            <h2 className="font-bold text-3xl text-center mt-5">
              READY TO JOIN SCRIPT?
            </h2>
            <p className="text-center">
              Don’t miss out on the opportunity to connect,
              <br /> learn, and grow with then top influencers
              <br /> and experts in the industry.
            </p>
          </div>
          <ScriptBtn
            className={` mt-9 bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl text-center ${buttonClass}`}
          >
            <a href="/BookATicket">Book A Ticket</a>
          </ScriptBtn>
          {/* <button className="mt-4 py-1 px-7 ml-2 mr-2  text-white font-semibold rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500  border-white ">
              Book A Ticket
            </button> */}
          <div className="container ">
            <img
              className="  hidden md:block lg:w-[465px]"
              src="../public/img/00.png"
            />
          </div>

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

import ScriptBtn from "../ScriptBtn";
export default function Join(buttonClass) {
  return (
    <div className="overflow-hidden">
      <div className="lg:mx-auto lg:mt-12">
        <div className="relative lg:flex lg:justify-between items-center mx-5 lg:gap-12">
          <div className="container lg:w-1/2">
            <h2 className="font-bold text-3xl text-center mt-5">
              READY TO JOIN SCRIPT?
            </h2>
            <p className="text-center mt-2">
              Don’t miss out on the opportunity to connect,
              <br /> learn, and grow with the top influencers
              <br /> and experts in the industry.
            </p>

            <div className="flex justify-center mt-8">
              <ScriptBtn
                className={`bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold py-2 px-6 rounded-3xl ${buttonClass}`}
              >
                <a href="/BookATicket">Book A Ticket</a>
              </ScriptBtn>
            </div>
          </div>

          <div className="container lg:w-1/2 flex justify-center mt-6 lg:mt-0">
            <img
              className="hidden md:block lg:w-[465px]"
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

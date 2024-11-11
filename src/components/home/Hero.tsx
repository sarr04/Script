import ScriptBtn from "../ScriptBtn";

interface HeroProps {
  buttonClass?: string;
}

export default function Hero({ buttonClass }: HeroProps) {
  return (
    <div className="flex hero justify-center items-center">
      <div className="w-full max-w-5xl px-6 lg:px-0">
        <div className="text-white rounded-[2rem] bg-custom  pb-20 relative z-10">
          <h2 className="text-white justify-center text-center font-bold text-3xl tracking-widest  pb-3 pt-12">
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
            <ScriptBtn
              className={`m-4 border border-white rounded-[2rem] ${buttonClass}`}
            >
              <a href="/BookATicket">Book A Ticket</a>
            </ScriptBtn>
          </div>
        </div>

        <div className="container flex flex-row justify-center items-center -translate-y-20 relative z-20 overflow-x-auto space-x-6  w-full">
          <img
            className=" w-[100px] lg:w-[180px] rounded-3xl object-contain snap-center"
            src="../public/img/d6.png"
          />
          <img
            className="w-[100px] md:w-[150px] lg:w-[250px] rounded-3xl object-contain snap-center"
            src="../public/img/dsdsd.png"
          />
          <img
            className="w-[100px] md:w-[150px] lg:w-[250px] rounded-3xl object-contain snap-center"
            src="../public/img/sit.png"
          />
          <img
            className=" w-[100px] lg:w-[180px] rounded-3xl object-contain snap-center"
            src="../public/img/Rectassngle 6.png"
          />
        </div>
      </div>
    </div>
  );
}

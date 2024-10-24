import Socials from "../Socials";

export default function Speakers() {
  return (
    <div className="pl-12 pr-12  overflow-hidden relative z-10 ">
      <div className="block justify-center items-center min-h-screen ml-12 mr-12 ">
        <div className="text-black rounded-2xl bg-white h-150 w-170 relative z-20">
          <h4 className="flex justify-center font-bold items-center text-center pt-10 bg-white ">
            EVENT CONFERENCE SPEAKERS
          </h4>
          <h2 className="flex justify-center items-center font-bold text-4xl text-center">
            THE SPEAKERS
          </h2>
          <h4 className="flex justify-center items-center text-center pb-5">
            Meet the visionaries shaping the <br /> future of social media.
          </h4>
        </div>
        <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl mb-24 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:gap-1 sm:grid-cols-2 lg:gap-4 items-center justify-center lg:pb-10 lg:p-10">
            <div className="flex flex-col items-center">
              <img className="inline " src="../public/img/a.png" />
              <div className="translate-y-[-30%] ">
                <Socials name="krisatin" work="influencer" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img src="../public/img/b.png" />
              <div className="translate-y-[-30%] ">
                <Socials name="Jerome Bell" work="influencer" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="../public/img/c.png" />
              <div className="translate-y-[-30%] ">
                <Socials name="Jacob Jones" work="influencer" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="../public/img/d.png" />
              <div className="translate-y-[-30%] ">
                <Socials name="Cameron Williamson " work="influencer" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="../public/img/e.png" />
              <div className="translate-y-[-30%] ">
                <Socials name="Devon Lane" work="influencer" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="../public/img/f.png" />
              <div className="translate-y-[-30%] ">
                <Socials name="Ronald Richards" work="influencer" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="../public/img/g.png" />
              <div className="translate-y-[-30%] ">
                <Socials name="Jane Cooper" work="influencer" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="../public/img/h.png" />
              <div className="translate-y-[-30%] ">
                <Socials name="Marvin McKinney" work="influencer" />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 ">
            <button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:bg-gray-500  text-white border border-white rounded-2xl  px-12 py-2 mb-8">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

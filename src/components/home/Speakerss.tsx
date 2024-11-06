import Socials from "../Socials";
import ScriptBtn from "../ScriptBtn";

const colors = {
  pin: "bg-gradient-to-r from-orange-400 to-pink-500",
  blu: "bg-gradient-to-b from-blue-300 to-purple-500",
};

export default function Speakerss(props: {
  buttonClass: string;
  color: keyof typeof colors;
}) {
  const { buttonClass, color } = props;

  return (
    <div className="pl-12 pr-12  overflow-hidden relative z-10 ">
      <div className="block justify-center items-center min-h-screen ">
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

        <div className={`p-4 rounded-3xl relative z-20 ${colors[color]}`}>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-12 items-center justify-center">
            <div className="flex flex-col items-center">
              <img className="inline" src="../public/img/a.png" />
              <div className="translate-y-[-30%]">
                <Socials
                  name="krisatin"
                  work="influencer"
                  followers="500k Followers"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img src="../public/img/b.png" />
              <div className="translate-y-[-30%]">
                <Socials
                  name="Jerome Bell"
                  work="influencer"
                  followers="20k Followers"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="../public/img/c.png" />
              <div className="translate-y-[-30%]">
                <Socials
                  name="Jacob Jones"
                  work="influencer"
                  followers="500k Followers"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="../public/img/d.png" />
              <div className="translate-y-[-30%]">
                <Socials
                  name="Cameron Wil"
                  work="influencer"
                  followers="200k Followers"
                />
              </div>
            </div>

            <div className="hidden md:flex flex-col items-center flex-none">
              <img src="../public/img/e.png" />
              <div className="translate-y-[-30%]">
                <Socials
                  name="Devon Lane"
                  work="influencer"
                  followers="500k Followers"
                />
              </div>
            </div>
            <div className="hidden md:flex flex-col items-center flex-none">
              <img src="../public/img/f.png" />
              <div className="translate-y-[-30%]">
                <Socials
                  name="Ronald Richards"
                  work="influencer"
                  followers="500k Followers"
                />
              </div>
            </div>
            <div className="hidden md:flex flex-col items-center flex-none">
              <img src="../public/img/g.png" />
              <div className="translate-y-[-30%]">
                <Socials
                  name="Jane Cooper"
                  work="influencer"
                  followers="500k Followers"
                />
              </div>
            </div>
            <div className="hidden md:flex flex-col items-center flex-none">
              <img src="../public/img/h.png" />
              <div className="translate-y-[-30%]">
                <Socials
                  name="Marvin McKinney"
                  work="influencer"
                  followers="400k Followers"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          {/* <button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:bg-gray-500  text-white border border-white rounded-2xl  px-12 py-2 mb-8">
              View All
            </button> */}
          <ScriptBtn
            customStyles={`bg-transparent border-2  bg-white/10  backdrop-blur-[150px] border-white text-white ${buttonClass}`}
            className="mb-8"
          >
            <a href="./ScriptBtn.tsx">View All</a>
          </ScriptBtn>
        </div>
      </div>
    </div>
  );
}

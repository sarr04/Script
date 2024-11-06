import ScriptBtn from "../ScriptBtn";

export default function Aboutt(buttonClass) {
  return (
    <section className="relative container mx-auto">
      <img
        src="../public/img/brand.png"
        className="h-[858px] absolute right-0 bottom-[-40%] z-0"
      />
      <div className="  lg:flex flex-col justify-center items-center ">
        <div className=" text-black rounded-2xl sm:ml-8 bg-white lg:p-8 lg:w-full lg:max-w-4xl">
          <h4 className="hidden md:block lg:items-center lg:flex lg:justify-center lg:p-10 font-semibold text-xl pt-4">
            ABOUT CONFERENCE
          </h4>
          <h2 className=" items-center text-center text-2xl lg:flex lg:justify-center lg:pb-4 lg:text-3xl font-bold">
            WHAT IS THE STORY ABOUT SCRIPT?
            <br />
          </h2>
          <p className="lg:flex text-center mb-5 lg:justify-center lg:items-center lg:font-bold lg:text-center bg-white lg:px-8">
            In the early 2010s, we witnessed a major development in the presence
            on social media, which changed the traditional media scene and
            established a new environment for communication. We, the Syrians,
            have an old story with content creation.
          </p>
          <div className="items-center flex justify-center lg:pt-8 mb-11">
            {/* <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:bg-gray-600 px-6 py-2 rounded-2xl">
              Learn More
            </button> */}
            <ScriptBtn
              className={`bg-gradient-to-r from-orange-400 to-pink-500 rounded-[2rem]  ${buttonClass}`}
            >
              <a href="">Learn more</a>
            </ScriptBtn>
          </div>
        </div>

        <div className="container relative max-w-screen-lg lg:px-30 lg:mt-8">
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl lg:p-8">
            <div className="grid grid-cols-2  lg:grid-cols-3  text-center">
              <div className="relative overflow-hidden bg-gradient-to-r from-orange-400 to-pink-500 lg:p-6 h-[200px] w-[200px] rounded-[1rem] flex flex-col items-center text-center shadow-lg">
                <img
                  className="bg-white lg:p-2 rounded-full absolute top-5 left-5 lg:h-[40px]"
                  src="/img/peoplee.svg"
                />
                <img
                  src="/Group 2.png"
                  className="absolute top-0 right-0 w-1/2 lg:w-1/3 opacity-50 "
                />
                <h2 className="lg:text-4xl text-2xl absolute bottom-16 left-6  lg:absolute lg:left-7 lg:top-10 font-bold text-white mt-12">
                  10+
                </h2>
                <p className="lg:text-lg  absolute bottom-8 left-6 lg:absolute lg:left-7  text-2xl font-semibold text-white mt-2">
                  Speakers
                </p>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-r from-orange-400 to-pink-500 lg:p-6 h-[200px] w-[200px] rounded-[1rem]  flex flex-col items-center text-center shadow-lg">
                <img
                  className="bg-white lg:p-2 rounded-full absolute top-5 left-5 lg:h-[40px]"
                  src="/img/mdi_talk.svg"
                />
                <img
                  src="/Group 2.png"
                  className="absolute top-0 right-0  w-1/2 lg:w-1/3 opacity-50"
                />
                <h2 className="absolute bottom-16 left-6 lg:absolute lg:top-10 lg:left-7  lg:text-4xl text-2xl font-bold text-white mt-12">
                  50+
                </h2>
                <p className="lg:text-lg  absolute bottom-8 left-6 lg:absolute lg:left-7  text-2xl font-semibold text-white mt-2">
                  Sessions
                </p>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-r from-orange-400 to-pink-500 lg:p-6 h-[200px] w-[200px] rounded-[1rem]  flex flex-col  items-center  text-center shadow-lg">
                <img
                  className="bg-white  lg:p-2 rounded-full absolute top-5 left-5 lg:h-[40px]"
                  src="/img/mic.svg"
                />
                <img
                  src="/Group 2.png"
                  className="absolute top-0 right-0  w-1/2 lg:w-1/3 opacity-50"
                />
                <h2 className=" absolute bottom-16 left-6 lg:absolute lg:top-10 lg:left-7  lg:text-4xl text-2xl font-bold text-white mt-12">
                  2000
                </h2>
                <p className=" absolute bottom-8 left-6 lg:text-lg lg:absolute lg:left-7  text-2xl font-semibold text-white mt-2">
                  Attendees
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

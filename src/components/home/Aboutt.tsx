import ScriptBtn from "../ScriptBtn";

export default function Aboutt(buttonClass) {
  return (
    <section className="relative container mx-auto">
      <img
        src="../public/img/brand.png"
        className="h-[858px] absolute right-0 bottom-[-40%] z-0"
      />
      <div className="lg:flex flex-col justify-center items-center min-h-screen">
        <div className="text-black rounded-2xl sm:ml-8 bg-white lg:p-8 lg:w-full lg:max-w-4xl">
          <h4 className="lg:items-center lg:flex lg:justify-center lg:p-10 font-semibold text-xl sm:pt-4">
            ABOUT CONFERENCE
          </h4>
          <h2 className="lg:items-center lg:flex lg:justify-center lg:pb-4 lg:text-3xl lg:font-bold">
            WHAT IS THE STORY ABOUT SCRIPT?
            <br />
          </h2>
          <p className="lg:flex lg:justify-center lg:items-center lg:font-bold lg:text-center bg-white lg:px-8">
            In the early 2010s, we witnessed a major development in the presence
            on social media, which changed the traditional media scene and
            established a new environment for communication. We, the Syrians,
            have an old story with content creation.
          </p>
          <div className="items-center flex justify-center lg:pt-8">
            {/* <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:bg-gray-600 px-6 py-2 rounded-2xl">
              Learn More
            </button> */}
            <ScriptBtn
              className={`bg-gradient-to-r from-orange-400 to-pink-500 rounded-[2rem]   ${buttonClass}`}
            >
              <a href="">Learn more</a>
            </ScriptBtn>
          </div>
        </div>

        {/* <div className="relative  lg:px-30 lg:mt-8 lg:w-full">
          <div className="   lg:w-full bg-gradient-to-r  from-orange-400 to-pink-500 rounded-3xl  p-6">
            <div className="relative grid grid-cols-1 md:grid-cols-3 lg:gap-36 lg: p-8 text-center ">
              <div className="relative bg-gradient-to-r from-orange-400 to-pink-500 lg:p-6 aspect-square rounded-[3rem] overflow-hidden lg:flex lg:flex-col lg:items-center lg:text-center shadow-lg">
                <img
                  className="bg-white rounded-full absolute lg:top-5 lg:left-9 lg:text-center "
                  src="/img/peoplee.svg"
                />
                <div className="lg:p-3 lg:mb-4">
                  <img
                    src="/Group 2.png"
                    className=" absolute top-0 right-0 lg:w-[50%]"
                  />
                </div>
                <div className="">
                  <h2 className=" text-4xl flex font-bold absolute bottom-40 text-white ">
                    10+
                  </h2>
                  <p className="text-lg font-semibold text-center  text-white ">
                    Speakers
                  </p>
                </div>
              </div>

              <div className="relative align-middles bg-gradient-to-r from-orange-400 to-pink-500 lg:p-6 rounded-[3rem] overflow-hidden lg:flex lg:flex-col lg:items-center lg:text-center shadow-lg">
                <img
                  className="bg-white rounded-full absolute lg:top-5 lg:left-9 lg:text-center"
                  src="/img/mdi_talk.svg"
                />
                <div className="lg:p-3 rounded-full lg:mb-4">
                  <img
                    src="../public/Group 2.png"
                    className="absolute top-0 right-0 lg:w-[50%] "
                  />
                </div>
                <h2 className="text-4xl font-bold  text-white absolute bottom-40">
                  50+
                </h2>
                <p className="text-lg font-semibold text-center text-white">
                  Sessions
                </p>
              </div>

              <div className="relative bg-gradient-to-r from-orange-400 to-pink-500 lg:p-6 aspect-square rounded-[3rem] overflow-hidden lg:flex lg:flex-col lg:items-center lg:text-center shadow-lg">
                <div className="lg:p-3 rounded-full lg:mb-4">
                  <img
                    className="bg-white rounded-full absolute lg:top-5 lg:left-9 lg:text-center"
                    src="/img/mic.svg"
                  />
                  <img
                    src="../public/Group 2.png"
                    className="absolute right-0 top-0 text-white lg:w-[50%]"
                  />
                </div>
                <h2 className="text-4xl  font-bold text-white absolute bottom-44">
                  2000
                </h2>
                <p className="text-lg font-semibold text-center text-white">
                  Attendees
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="relative lg:px-30 lg:mt-8 w-full">
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl p-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:p-8">
              <div className="relative bg-gradient-to-r from-orange-400 to-pink-500 lg:p-6 aspect-square rounded-[2rem] flex flex-col items-center text-center shadow-lg">
                <img
                  className="bg-white lg:p-2 rounded-full absolute top-5 left-5 lg:w-8 lg:h-8"
                  src="/img/peoplee.svg"
                  alt="Speaker Icon"
                />
                <img
                  src="/Group 2.png"
                  className="absolute top-0 right-0 w-1/3 opacity-50"
                  alt="Pattern"
                />
                <h2 className="lg:text-4xl font-bold text-white mt-12">10+</h2>
                <p className="lg:text-lg font-semibold text-white lg:mt-2">
                  Speakers
                </p>
              </div>

              <div className="relative  bg-gradient-to-r from-orange-400 to-pink-500 lg:p-6 aspect-square rounded-[2rem] flex flex-col items-center text-center shadow-lg">
                <img
                  className="bg-white lg:p-2 rounded-full absolute top-5 left-5 lg:w-8 lg:h-8"
                  src="/img/mdi_talk.svg"
                />
                <img
                  src="/Group 2.png"
                  className="absolute top-0 right-0 w-1/3 opacity-50"
                />
                <h2 className="lg:text-4xl font-bold text-white mt-12">50+</h2>
                <p className="lg:text-lg font-semibold text-white mt-2">
                  Sessions
                </p>
              </div>

              <div className="justify ">
                <div className="relative  bg-gradient-to-r from-orange-400 to-pink-500 lg:p-6 aspect-square rounded-[2rem] flex flex-col items-center text-center shadow-lg">
                  <img
                    className="bg-white lg:p-2 rounded-full absolute top-5 left-5 lg:w-8 lg:h-8"
                    src="/img/mic.svg"
                  />
                  <img
                    src="/Group 2.png"
                    className="absolute top-0 right-0 w-1/3 opacity-50"
                  />
                  <h2 className="lg:text-4xl font-bold text-white mt-12">
                    2000
                  </h2>
                  <p className="lg:text-lg font-semibold text-white mt-2">
                    Attendees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

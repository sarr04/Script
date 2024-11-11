import ScriptBtn from "../ScriptBtn";

export default function Aboutt(buttonClass) {
  return (
    <section className="relative ">
      <img
        src="../public/img/brand.png"
        className="h-[858px] absolute right-0 bottom-[-40%] z-0"
      />
      <div className="container mx-auto text-center">
        <div className="  lg:flex flex-col justify-center items-center ">
          <div className=" text-black rounded-2xl sm:ml-8  lg:p-8 lg:w-full lg:max-w-4xl">
            <h4 className="hidden md:block lg:items-center lg:flex lg:justify-center pb-2 font-semibold text-xl pt-4">
              ABOUT CONFERENCE
            </h4>
            <h2 className=" items-center text-center text-2xl lg:flex lg:justify-center lg:pb-4 lg:text-3xl font-bold">
              WHAT IS THE STORY ABOUT SCRIPT?
              <br />
            </h2>
            <p className="lg:flex text-center mb-5 lg:justify-center lg:items-center font-thin lg:text-center  lg:px-8">
              In the early 2010s, we witnessed a major development in the
              presence on social media, which changed the traditional media
              scene and established a new environment for communication. We, the
              Syrians, have an old story with content creation.
            </p>
          </div>
          <div className="items-center flex justify-center lg:px-10 lg:pt-8 mb-11">
            <ScriptBtn
              className={`bg-custom rounded-[2rem]  absolute ${buttonClass}`}
            >
              <a href="">Learn more</a>
            </ScriptBtn>
          </div>
        </div>

        <div className="container relative lg:mt-8">
          <div className=" bg-custom rounded-[2rem]">
            <div className=" flex justify-center md:justify-around flex-wrap gap-4 p-4">
              <div className="relative overflow-hidden backdrop-blur-[20px] bg-white/15  w-[160px] h-[160px] lg:h-[300px]  lg:w-[300px] rounded-[1rem] flex flex-col items-center text-center about-card-shadow">
                <img
                  className="bg-white lg:p-2 rounded-full absolute top-5 left-5 h-[30px] lg:h-[45px]"
                  src="/img/mic.svg"
                />
                <img
                  src="/Group 2.png"
                  className="absolute top-0 right-0 w-1/2  opacity-50 "
                />
                <h2 className="lg:text-4xl text-xl absolute bottom-16 left-6  lg:absolute lg:left-7 lg:top-20 font-bold text-white mt-12">
                  10+
                </h2>
                <p className="lg:text-3xl  absolute bottom-8 left-6 lg:absolute lg:left-7 lg:bottom-20  text-xl font-semibold text-white mt-2">
                  Speakers
                </p>
              </div>

              <div className="relative overflow-hidden backdrop-blur-[20px] bg-white/15  w-[160px] h-[160px] lg:h-[300px] lg:w-[300px] rounded-[1rem]  flex flex-col items-center text-center about-card-shadow">
                <img
                  className="bg-white lg:p-2 rounded-full absolute top-5 left-5 h-[30px] lg:h-[45px]"
                  src="/img/mdi_talk.svg"
                />
                <img
                  src="/Group 2.png"
                  className="absolute top-0 right-0  w-1/2  opacity-50"
                />
                <h2 className="absolute bottom-16 left-6 lg:absolute lg:top-20 lg:left-7  lg:text-4xl text-xl font-bold text-white mt-12">
                  50+
                </h2>
                <p className="lg:text-3xl absolute bottom-8 left-6 lg:absolute lg:left-7 lg:bottom-20 text-xl font-semibold text-white mt-2">
                  Sessions
                </p>
              </div>

              <div className="relative overflow-hidden backdrop-blur-[20px] bg-white/15  justify-center w-[160px] h-[160px]  lg:h-[300px] lg:w-[300px] rounded-[1rem]  flex flex-col  items-center  text-center about-card-shadow">
                <img
                  className="bg-white  lg:p-2 rounded-full absolute top-5 left-5 h-[30px] lg:h-[45px]"
                  src="/img/peoplee.svg"
                />
                <img
                  src="/Group 2.png"
                  className="absolute top-0 right-0  w-1/2  opacity-50"
                />
                <h2 className=" absolute bottom-16 left-6 lg:absolute lg:top-20 lg:left-7  lg:text-4xl text-xl font-bold text-white mt-12">
                  2000
                </h2>
                <p className=" absolute bottom-8 left-6 lg:text-3xl lg:absolute lg:left-7 lg:bottom-20  text-xl font-semibold text-white mt-2">
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

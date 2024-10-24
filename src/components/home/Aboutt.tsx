export default function Aboutt() {
  return (
    <section className="relative">
      <img
        src="../public/img/brand.png"
        className="h-[858px] absolute right-0 bottom-[-40%] z-0"
      />
      <div className="lg:flex flex-col justify-center items-center min-h-screen">
        <div className="text-black rounded-2xl sm:ml-8 bg-white lg:p-8 lg:w-full lg:max-w-4xl">
          <h4 className="lg:items-center lg:flex lg:justify-center lg:p-10 font-bold text-2xl sm:pt-4">
            ABOUT CONFERENCE
          </h4>
          <h2 className="lg:items-center lg:flex lg:justify-center lg:pb-4 lg:text-xl lg:font-bold">
            WHAT IS THE STORY ABOUT SCRIPT?
          </h2>
          <p className="lg:flex lg:justify-center lg:items-center lg:font-bold lg:text-center bg-white lg:px-8">
            In the early 2010s, we witnessed a major development in the presence
            on social media, which changed the traditional media scene and
            established a new environment for communication. We, the Syrians,
            have an old story with content creation.
          </p>
          <div className="lg:items-center lg:flex lg:justify-center lg:pt-8">
            <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:bg-gray-600 px-6 py-2 rounded-2xl">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative  px-30 lg:mt-8 lg:w-full lg:max-w-5xl">
          <div className="absolute lg:inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl  lg:h-60"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 p-8 text-center">
            <div className="relative bg-gradient-to-r from-orange-400 to-pink-500 lg:p-6 rounded-lg lg:flex lg:flex-col lg:items-center lg:text-center shadow-md">
              <img
                className="bg-white rounded-full absolute lg:top-2 lg:left-3"
                src="/img/peoplee.svg"
              />
              <div className="lg:p-3 lg:mb-4">
                <img
                  src="/Group 2.png"
                  className="absolute top-0 right-0 lg:w-20 lg:h-15"
                />
              </div>
              <div className="">
                <h2 className=" text-4xl flex justify-center font-bold lg:mb-2 sm:ml-11 text-white lg:text-center">
                  10+
                </h2>
                <p className="text-lg font-semibold text-center text-white lg:text-center ">
                  Speakers
                </p>
              </div>
            </div>

            <div className="relative align-middles bg-gradient-to-r from-orange-400 to-pink-500 lg:p-6 rounded-lg lg:flex lg:flex-col lg:items-center lg:text-center shadow-md">
              <img
                className="bg-white rounded-full absolute lg:top-2 lg:left-3 lg:text-center"
                src="/img/mdi_talk.svg"
              />
              <div className="lg:p-3 rounded-full lg:mb-4">
                <img
                  src="../public/Group 2.png"
                  className="absolute top-0 right-0 lg:w-20 lg:h-15 "
                />
              </div>
              <h2 className="text-4xl font-bold lg:mb-2 text-center sm:ml-11 text-white ">
                50+
              </h2>
              <p className="text-lg font-semibold text-center text-white">
                Sessions
              </p>
            </div>

            <div className="relative bg-gradient-to-r from-orange-400 to-pink-500 lg:p-6 rounded-lg lg:flex lg:flex-col lg:items-center lg:text-center shadow-md">
              <div className="lg:p-3 rounded-full lg:mb-4">
                <img
                  className="bg-white rounded-full sm:mr-30 absolute top-0 left-0"
                  src="/img/mic.svg"
                />
                <img
                  src="../public/Group 2.png"
                  className="absolute right-0 top-0 text-white lg:w-20 lg:h-15"
                />
              </div>
              <h2 className="text-4xl  font-bold mb-2 sm:ml-14 text-white">
                2000
              </h2>
              <p className="text-lg font-semibold text-center text-white">
                Attendees
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

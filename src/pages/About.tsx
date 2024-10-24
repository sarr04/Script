import NavBar from "../components/NavBar";

const About = () => {
  return (
    <section className="min-h-screen">
      <NavBar
        buttonClass="bg-gradient-to-b from-blue-300 to-purple-500 hover:bg-blue-700"
        imageSrc="/img/Logoblue.svg"
      />
      <div className="ml-11 mr-11">
        <div className="  lg:py-20 mt-5 p-10 bg-gradient-to-b from-blue-300 to-purple-500 rounded-lg w-full text-white">
          <div className="text-center">
            <h1 className="font-bold text-lg tracking-widest">
              ABOUT SCRIPT CONFERENCE
            </h1>
            <p className="my-4">
              Bringing together the brightest minds in social media to inspire,
              connect, and drive change
            </p>
            <button className="hover:bg-slate-400 p-2 rounded-2xl border border-white">
              Book A Ticket
            </button>
          </div>
        </div>

        <div className="text-center ">
          <h1 className="bg-white my-6 font-bold text-xl">
            OUR MISSION & VISION
          </h1>
          <div>
            <div className="flex ">
              <div>
                <h1 className="font-bold">our mission</h1>
                <p>
                  At Script we believe in empowering influencers <br />
                  to create meanigful connections and elevate <br />
                  their platforms with the latest trends and tools
                </p>
              </div>
              <div className="flex items-center justify-between w-full p-4">
                <img className="" src="/bookholding.png" />
              </div>
            </div>
            <div className="flex flex-row-reverse">
              <div>
                <h1 className="font-bold">our vission</h1>
                <p>
                  At Script our vision is to create global <br />
                  comunity where influencers,creators and <br />
                  brands can come together to inspire,innovate <br />
                  and drive meaningful change in the digital landscape.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 p-4">
                <img className="" src="/eyee.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-5">
        <h1 className="font-bold text-2xl pb-9">WHY SCRIPT?</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex space-x-9">
          <div className=" relative text-center lg:px-15 font-bold text-white p-8 lg:w-50 lg:h-40 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl">
            Networking
            <h2 className="text-white font-bold text-4xl absolute bottom-1 ">
              -
            </h2>
          </div>
          <div className="relative text-center border border-black  font-bold p-8 lg:w-50 lg:h-40  rounded-xl">
            Exclusive Content
            <h2 className="font-bold text-3xl absolute bottom-1 ">+</h2>
          </div>
          <div className="relative text-center border border-black font-bold  p-8 lg:w-50 lg:h-40  rounded-xl">
            Industry Experts
            <h2 className="font-bold text-3xl absolute bottom-1">+</h2>
          </div>
        </div>
      </div>
      <p className="ml-11 mr-11 pt-10">
        Expand your reach and build meaningful connections with fellow
        influencers,creators and industry leaders <br />
        SCRIPT offers unparalled opportunities to network with the top minds in
        social media.
      </p>
      <div>
        <div className="text-center">
          <h1 className="font-bold text-3xl pt-12">WHO ATTENDS SCRIPT?</h1>
          <h4 className="">
            SCRIPT connects influencers, content creators, and industry
            professionals from all Syria . Attendees are passionate about social
            media, eager to grow, and ready to make an impact.
          </h4>
          <h3 className="font-bold ">Here's who you'll meet at SCRIPT:</h3>
        </div>
      </div>
    </section>
  );
};

export default About;

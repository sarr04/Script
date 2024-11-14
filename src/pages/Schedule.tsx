import Footer from "../components/home/Footer";
import NavBar from "../components/NavBar";
import ScheduleTabs from "../components/ScheduleTabs";
import ScriptBtn from "../components/ScriptBtn";
import Speakerss from "../components/home/Speakerss";

const Schedule = (buttonClass) => {
  const showSpekers = true;
  return (
    <div>
      <NavBar
        buttonClass="bg-custom hover:bg-blue-700"
        imageSrc="/img/Logo.png"
      />

      <div className="container mx-auto max-w-screen-lg px-4   rounded-3xl text-white ">
        <div className="w-full  px-6 lg:px-0">
          <div className="text-white rounded-[2rem] bg-custom pb-20 relative z-10">
            <h2 className="text-white justify-center text-center font-bold text-3xl tracking-widest pb-3 pt-12">
              WELCOME TO SCRIPT 2024
            </h2>
            <div className="flex justify-center items-center text-center">
              <p className="text-white font-bold text-xl px-3 text-center">
                A transformative 1-day event where top influencers, creators,
                and industry experts gather to share insights, ignite ideas, and
                foster meaningful connections. Get ready for an immersive
                experience designed to inspire and shape the future of digital
                content creation.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <ScriptBtn
                className={`mt-1  border border-white rounded-[2rem] ${buttonClass}`}
              >
                <a href="/BookATicket">Download Schedule</a>
              </ScriptBtn>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex justify-center items-center">
        <h1 className="lg:text-3xl font-bold lg:mt-28 lg:mb-8 text-2xl mt-7">
          SCRIPT SCHEDULE
        </h1>
      </div>

      <div className="container mx-auto lg:mb-12">
        <div className="block lg:flex px-8 mt-6 lg:justify-between gap-5">
          <div className="lg:w-[50%]">
            <h1 className="lg:text-3xl text-center lg:text-left">
              Here's What You Can Expect:
            </h1>
            <p className="lg:text-left text-center">
              Join us for an immersive three-day event where industry leaders,
              influencers, and creators come together to explore the future of
              digital influence. Each day is packed with insightful sessions,
              inspiring keynotes, and opportunities to connect with like-minded
              professionals.
            </p>
            <div className="flex">
              <ScriptBtn
                className={`m-2 border-white bg-custom hidden lg:block rounded-[2rem] ${buttonClass}`}
              >
                <a href="/">Download Schedule</a>
              </ScriptBtn>
            </div>
            <img src="/cal.png" className="w-[300px] hidden lg:block" />
          </div>
          <ScheduleTabs showSpekers={showSpekers} color="orangee" />
        </div>

        <ScriptBtn
          className={`m-2 border lg:hidden  ml-10 border-white bg-custom rounded-[2rem] ${buttonClass}`}
        >
          <a href="/">Download Schedule</a>
        </ScriptBtn>
      </div>

      <div className="container mx-auto relative z-10   ">
        <Footer color="orange" />
      </div>

      <img
        src="/img/ll.png"
        className="absolute left-0 w-full lg:-translate-y-96 -translate-y-28"
      />
    </div>
  );
};

export default Schedule;

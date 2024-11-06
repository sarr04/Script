import Footer from "../components/home/Footer";
import NavBar from "../components/NavBar";
import ScheduleTabs from "../components/ScheduleTabs";
import ScriptBtn from "../components/ScriptBtn";
import Speakerss from "../components/home/Speakerss";
const Schedule = (buttonClass) => {
  return (
    <div>
      <NavBar
        buttonClass="bg-gradient-to-r from-orange-400 to-pink-500  hover:bg-blue-700"
        imageSrc="/img/Logo.png"
      />
      <div className="flex hero justify-center items-center">
        <div className="w-full max-w-5xl px-6 lg:px-0">
          <div className="text-white rounded-[2rem] bg-gradient-to-r from-orange-400 to-pink-500 pb-20 relative z-10">
            <h2 className="text-white justify-center text-center font-bold text-3xl tracking-widest pb-3 pt-12">
              WELCOME TO SCRIPT 2024
            </h2>
            <div className="flex justify-center">
              <p className="text-white font-bold text-xl pl-8 text-center">
                A transformative 1-day event where top influencers, creators,
                and industry experts gather to share insights, ignite ideas, and
                foster meaningful connections. Get ready for an immersive
                experience designed to inspire and shape the future of digital
                content creation.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <ScriptBtn
                className={`m-4 border  border-white rounded-[2rem] ${buttonClass}`}
              >
                <a href="/BookATicket">Download Schedule</a>
              </ScriptBtn>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="lg:text-3xl font-bold lg:mt-10">SCRIPT SCHEDULE</h1>
      </div>
      <div className="flex container mx-auto mt-6">
        <div className="container mx-auto ">
          <h1 className="lg:text-3xl">Here's What You Can Expect:</h1>
          <p className="">
            Join us for an immersive three-day event where industry leaders,
            <br />
            influencers, and creators come together to explore the future of
            <br />
            digital influence. Each day is packed with insightful sessions,
            <br />
            inspiring keynotes, and opportunities to connect with like-minded
            <br />
            professionals.
          </p>
          <div className="flex justify-center items-center">
            <ScriptBtn
              className={`m-4 border  border-white rounded-[2rem] ${buttonClass}`}
            >
              <a href="/BookATicket">Download Schedule</a>
            </ScriptBtn>
          </div>
          <img src="/cal.png" className="w-[300px]" />
        </div>
        <ScheduleTabs />
      </div>
      <Speakerss color="pin" />
      <Footer color="orange" />
    </div>
  );
};
export default Schedule;

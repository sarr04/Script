import Footer from "../components/home/Footer";
import NavBar from "../components/NavBar";
import ScheduleTabs from "../components/ScheduleTabs";
import ScriptBtn from "../components/ScriptBtn";
import { useState } from "react";

import Speakerss, { Speaker } from "../components/home/Speakerss";

const Schedule = (props: { buttonClass?: string }) => {
  const [activeSpeakers, setActiveSpeakers] = useState<{
    speakers: Speaker[];
    msg: string;
  }>({
    msg: "",
    speakers: [],
  });

  const showSpekers = true;
  return (
    <div>
      <NavBar
        buttonClass="bg-custom hover:bg-blue-700"
        imageSrc="/img/Logo.png"
      />

      <div className="container flex justify-center px-2 rounded-3xl text-white ">
        <div className="px-4 lg:px-0 lg:w-[1200px]">
          <div className="text-white rounded-[2rem] bg-custom lg:px-16  pb-10 relative z-10 lg:pb-20">
            <h2 className="text-white justify-center text-center font-bold text-4xl tracking-widest pb-3 pt-12">
              WELCOME TO SCRIPT 2024
            </h2>
            <div className="flex justify-center items-center text-center">
              <p className="text-white font-bold   text-sm lg:text-xl px-3 text-center">
                A transformative 1-day event where top influencers, creators,
                and industry experts gather to share insights, ignite ideas, and
                foster meaningful connections. Get ready for an immersive
                experience designed to inspire and shape the future of digital
                content creation.
              </p>
            </div>
            <div className="flex justify-center items-center lg:pt-2">
              <ScriptBtn
                className={`mt-1  border border-white rounded-[2rem] ${props.buttonClass}`}
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
        <div className="grid grid-cols-12 px-8 md:p-0 mt-6 lg:justify-between gap-5">
          <div className="col-span-12 md:col-span-6">
            <h1 className="lg:text-3xl text-center lg:text-left">
              Here's What You Can Expect:
            </h1>
            <p className="lg:text-left  lg:text-lg text-center">
              Join us for an immersive three-day event where industry leaders,
              influencers, and creators come together to explore the future of
              digital influence. Each day is packed with insightful sessions,
              inspiring keynotes, and opportunities to connect with like-minded
              professionals.
            </p>
            <div className="flex">
              <ScriptBtn
                className={`m-2 border-white bg-custom hidden lg:block rounded-[2rem] ${props.buttonClass}`}
              >
                <a href="/">Download Schedule</a>
              </ScriptBtn>
            </div>
            <img src="/cal.png" className="w-[300px] hidden lg:block" />
          </div>

          <div className="col-span-12 md:col-span-6  lg:pl-8 ">
            <ScheduleTabs
              onTabChange={(speakers, msg) =>
                setActiveSpeakers({ msg, speakers })
              }
              showSpekers={showSpekers}
              color="orangee"
            />
          </div>
        </div>
        <p className="text-center mt-4 lg:text-3xl font-bold  text-black">
          {activeSpeakers.msg}
        </p>
        <div className="mx-7">
          <Speakerss
            speakerss={activeSpeakers.speakers}
            color="pin"
            limit={4}
            showAll={true}
            buttonClass="btn-primary"
          ></Speakerss>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <ScriptBtn className="m-2 border md:hidden ml-10 border-white bg-custom rounded-[2rem] justify-center ${props.buttonClass}">
          <a href="/">Download Schedule</a>
        </ScriptBtn>
      </div>

      <div className="container mx-auto relative z-10 mt-10  ">
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

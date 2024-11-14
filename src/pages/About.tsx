import { useState } from "react";
import NavBar from "../components/NavBar";
import ScriptBtn from "../components/ScriptBtn";
import Socials from "../components/Socials";
import { Link } from "react-router-dom";
import Footer from "../components/home/Footer";
import React from "react";
import Hover from "../components/Hover";
import ScheduleTabs from "../components/ScheduleTabs";
import Speakers from "../components/home/Speakerss";

const About = (buttonClass) => {
  const [openIndex, setOpenIndex] = useState(null);

  const showSpekers = false;

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const [hoverNetworking, setHoverNetworking] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const featuresText = [
    "Expand your reach and build meaningful connections with fellow influencers, creators, and industry leaders. SCRIPT offers unparalleled opportunities to network with the top minds in social media.",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  ];

  return (
    <section className="overflow-x-hidden">
      <NavBar
        buttonClass="bg-custom2 hover:bg-blue-700"
        imageSrc="/img/Logoblue.svg"
      />

      <div className="w-[90%] lg:w-full max-w-screen-lg mx-auto px-4 lg:py-20 mt-5 p-10 bg-custom2 rounded-3xl text-white">
        <div className="text-center">
          <h1 className="font-bold text-4xl tracking-widest">
            ABOUT SCRIPT CONFERENCE
          </h1>
          <h3 className="my-4 lg:text-xl text-lg font-semibold">
            Bringing together the brightest minds in social media to inspire,
            connect, and drive change
          </h3>
          <ScriptBtn
            className={`border inline-block border-white px-7 mt-9 bg-transparent backdrop-blur-[150px] rounded-3xl text-center ${buttonClass}`}
          >
            <a href="/BookATicket">Book A Ticket</a>
          </ScriptBtn>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center my-10">
        <h1 className="bg-white font-bold text-2xl lg:text-5xl my-6">
          OUR MISSION & VISION
        </h1>

        <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-col lg:w-1/2">
            <h1 className="font-bold text-2xl lg:text-black text-purple-700 mb-2 lg:text-3xl">
              Our Mission
            </h1>
            <p className="text-gray-600 lg:text-2xl">
              AT SCRIPT, we believe in empowering influencers to create
              meaningful connections and elevate their platforms with the latest
              trends and tools.
            </p>
          </div>
          <div className="relative flex lg:w-1/2 justify-center lg:justify-end">
            <img
              src="/img/1.png"
              className="relative lg:h-[500px] lg:w-[600px] scale-125 -translate-x-5 hidden md:block"
            />
            <img
              src="/img/shap-06.png"
              className="absolute top-1/2 translate-y-[-50%] left-[50%] translate-x-[-60%]  lg:w-[400px] hidden md:block"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse lg:gap-10 items-center lg:items-start mt-10 text-center lg:text-left">
          <div className="flex flex-col lg:w-1/2">
            <h1 className="font-bold text-2xl lg:text-black text-purple-700 mb-2 lg:text-3xl">
              Our Vision
            </h1>
            <p className="text-gray-600 lg:text-xl ">
              AT SCRIPT, our vision is to create a global community where
              influencers, creators, and brands can come together to inspire,
              innovate, and drive meaningful change in the digital landscape.
            </p>
          </div>
          <div className="relative flex lg:w-1/2 justify-center lg:justify-start">
            <img
              src="/img/2.png"
              className="relative lg:w-[500px] scale-125 translate-x-4 hidden md:block -translate-y-24"
            />
            <img
              src="/halfcircle.png"
              className="absolute top-1/2 translate-y-[-70%] left-[50%] translate-x-[-60%] lg:w-[400px] hidden md:block"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center pt-8">
        <h1 className="font-bold text-4xl py-6">WHY SCRIPT?</h1>
      </div>

      <div className="container mx-auto lg:flex justify-center items-center grid grid-rows-3 gap-2 relative overflow-hidden lg:py-7">
        <img src="squarepattern.png" className="absolute  hidden md:block" />
        <img
          src="/tallbrand.png"
          className="absolute w-full h-full block lg:hidden"
        />
        <Hover
          buttonText="Networking"
          hoverGradient="from-purple-400 to-blue-500"
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
        />
        <Hover
          buttonText="Exclusive Content"
          hoverGradient="from-green-400 to-blue-500"
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
        />
        <Hover
          buttonText="Industry Experts"
          hoverGradient="from-pink-400 to-purple-500"
          isOpen={openIndex === 2}
          onToggle={() => handleToggle(2)}
        />
      </div>

      {openIndex !== null && (
        <div className="container mx-auto text-center mt-4">
          <p>{featuresText[openIndex]}</p>
        </div>
      )}

      <div id="speakerss" className="container mx-auto text-center px-4 mt-10">
        <h1 className="font-bold text-3xl pt-12 pb-5">WHO ATTENDS SCRIPT?</h1>
        <h4 className="text-xl">
          SCRIPT connects influencers, content creators, and industry
          professionals from all over Syria. Attendees are passionate about
          social media, eager to grow, and ready to make an impact.
        </h4>
        <h3 className="font-bold text-xl">Here's who you'll meet at SCRIPT:</h3>
      </div>
      <div className="mx-3">
        <Speakers
          speakerss={[
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "/img/b.png",
            },
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "/img/c.png",
            },
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "/img/a.png",
            },
            {
              name: "Marvin McKinney",
              work: "influencer",
              followers: "400k Followers",
              img: "img/d.png",
            },
            {
              name: "ccc",
              work: "content creator",
              followers: "20k followers",
              img: "/cc.png",
            },
            {
              name: "dddddd",
              work: "media",
              followers: "300k followers",
              img: "/dd.png",
            },
            {
              name: "eeeee",
              work: "blogger",
              followers: "20k followers",
              img: "/ee.png",
            },
          ]}
          color="blu"
        />
      </div>

      <ScriptBtn
        className={`border border-white lg:mt-9 bg-transparent backdrop-blur-[150px] rounded-3xl text-center ${buttonClass}`}
      >
        <a href="/BookATicket">View More</a>
      </ScriptBtn>

      <div className="container mx-auto mt-9 mb-4 lg:text-5xl text-4xl font-bold text-center">
        DAILY SCHEDULE
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 justify-between lg:mt-6">
        <div className="px-4 space-y-4">
          <h4 className="font-bold text-center lg:text-left text-xl">
            Welcome to the Script Conference! Here’s What You Can Expect
          </h4>
          <p className="text-center lg:text-left">
            Join us for an immersive three-day event where industry leaders,
            influencers, and creators come together to explore the future of
            digital influence. Each day is packed with insightful sessions,
            inspiring keynotes, and opportunities to connect with like-minded
            professionals.
          </p>
          <ScriptBtn
            className={`text-white bg-custom2 mt-4 hidden lg:block bg-transparent backdrop-blur-[150px] mb-5 rounded-3xl text-center ${buttonClass}`}
          >
            Download Schedule
          </ScriptBtn>
          <img
            src="/cal.png"
            className="w-[300px] mx-auto lg:mx-0 hidden lg:block"
          />
        </div>

        <div className="px-4 lg:pl-8">
          <ScheduleTabs showSpekers={showSpekers} color="bluee" />
        </div>

        <ScriptBtn
          className={`text-white bg-custom2 mx-7 lg:hidden block lg:mx-10 bg-transparent backdrop-blur-[150px] mb-5 rounded-3xl text-center ${buttonClass}`}
        >
          Download Schedule
        </ScriptBtn>
      </div>

      <div className="container mx-auto relative z-10">
        <Footer color="purple" />
      </div>

      <img
        src="/img/ll.png"
        className="absolute left-0 w-full lg:-translate-y-96 -translate-y-28"
      />
    </section>
  );
};

export default About;

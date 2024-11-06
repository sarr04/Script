import { useState } from "react";
import NavBar from "../components/NavBar";
import ScriptBtn from "../components/ScriptBtn";
import Socials from "../components/Socials";
import { Link } from "react-router-dom";
import Footer from "../components/home/Footer";
import React from "react";

import Hover from "../components/Hover";

const About = (buttonClass) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const [hoverNetworking, setHoverNetworking] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <section className="min-h-screen">
      <NavBar
        buttonClass="bg-gradient-to-b from-blue-300 to-purple-500 hover:bg-blue-700"
        imageSrc="/img/Logoblue.svg"
      />
      <div className="ml-24 mr-24">
        <div className="lg:py-20 mt-5 p-10 bg-gradient-to-b from-blue-300 to-purple-500 rounded-3xl lg:w-full text-white">
          <div className="text-center">
            <h1 className="font-bold lg:text-2xl tracking-widest">
              ABOUT SCRIPT CONFERENCE
            </h1>
            <h3 className="my-4 lg:text-3xl">
              Bringing together the brightest minds in social media to <br />{" "}
              inspire, connect, and drive change
            </h3>
            <ScriptBtn
              className={`border inline-block border-white mt-9 bg-transparent backdrop-blur-[150px] rounded-3xl text-center ${buttonClass}`}
            >
              <a href="/BookATicket">Book A Ticket</a>
            </ScriptBtn>
          </div>
        </div>

        <div className="text-center">
          <h1 className="bg-white my-6 font-bold lg:text-5xl">
            OUR MISSION & VISION
          </h1>

          <div className="container my-10 overflow-visible">
            <div className="flex flex-col lg:flex-row lg:items-center mx-5 lg:gap-10">
              <div className="flex flex-col lg:w-1/2">
                <h1 className="font-bold text-3xl lg:text-black text-purple-700 lg:text-left text-center mb-2">
                  Our Mission
                </h1>
                <h3 className="text-2xl lg:text-left">
                  At Script, we believe in empowering <br /> influencers to
                  create meaningful connections <br /> and elevate their
                  platforms with the latest trends and tools.
                </h3>
              </div>

              <div className="relative flex lg:w-1/2 justify-center lg:justify-end">
                <img
                  src="/img/1.png"
                  className=" block:md relative w-[300px] lg:w-full scale-125  hidden md:flex"
                />
                <img
                  src="/img/shap-06.png"
                  className="absolute  top-1/2 translate-y-[-50%] left-[50%] translate-x-[-50%] w-[250px] lg:w-[350px]  hidden md:flex"
                />
              </div>
            </div>
          </div>

          <div className="container my-10 overflow-visible">
            <div className="flex flex-col lg:flex-row items-center mx-5 lg:gap-10">
              <div className="relative flex lg:w-1/2 justify-center lg:justify-start ">
                <img
                  src="img/2.png"
                  className=" block:md relative w-[300px] lg:w-full scale-125  hidden md:flex"
                />
                <img
                  src="/halfcircle.png"
                  className="absolute  top-1/2 translate-y-[-50%] left-[50%] translate-x-[-50%] w-[250px] lg:w-[350px]  hidden md:flex"
                />
              </div>
              <div className="flex-grow-0 basis-1/2">
                <h1 className="font-bold text-3xl lg:text-black text-purple-700  lg:text-left">
                  Our Vision
                </h1>
                <p className="lg:text-left   text-2xl ">
                  At Script, our vision is to create a global community where
                  influencers, creators, and brands can come together to
                  inspire, innovate, and drive meaningful change in the digital
                  landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-5">
        <h1 className="font-bold text-2xl pb-9">WHY SCRIPT?</h1>

        {/* <div className="relative lg:flex lg:justify-center grid grid-rows-3 lg:gap-4 m-5"></div> */}
      </div>

      <div className="flex justify-center items-center space-x-3 ">
        <Hover
          buttonText="NetWorking"
          hoverGradient="from-purple-400 to-blue-500"
          text="This is text for button 1"
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
        />
        <Hover
          buttonText="Exclusive Content"
          hoverGradient="from-green-400 to-blue-500"
          text="This is text for button 2"
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
        />
        <Hover
          buttonText="industry Experts"
          hoverGradient="from-pink-400 to-purple-500"
          text="This is text for button 3"
          isOpen={openIndex === 2}
          onToggle={() => handleToggle(2)}
        />
      </div>

      <div className="px-4">
        <div className="text-center">
          <h1 className="font-bold text-3xl pt-12">WHO ATTENDS SCRIPT?</h1>
          <h4 className="text-xl">
            SCRIPT connects influencers, content creators, and industry <br />
            professionals from all over Syria. Attendees are passionate about
            <br />
            social media, eager to grow, and ready to make an impact.
            <br />
          </h4>
          <h3 className="font-bold text-xl">
            Here's who you'll meet at SCRIPT:
          </h3>
        </div>
      </div>

      <div className="lg:mx-14 lg:p-5 mt-16  rounded-3xl bg-gradient-to-b from-blue-300 to-purple-500">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-12 pt-4 lg:pt-11 items-center justify-center">
          <div className="flex flex-col items-center">
            <img className="inline" src="../public/img/a.png" />
            <div className="translate-y-[-30%]">
              <Socials
                name="Kristin"
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
                followers="500k Followers"
              />
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center flex-none ">
            <img src="../public/img/c.png" />
            <div className="translate-y-[-30%] ">
              <Socials
                name="Jacob Jones"
                work="influencer"
                followers="500k Followers"
              />
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center flex-none">
            <img src="../public/img/d.png" />
            <div className="translate-y-[-30%]  ">
              <Socials
                name="Cameron Wil"
                work="influencer"
                followers="500k Followers"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:mt-8 pb-4">
          <ScriptBtn
            className={`border border-white lg:mt-9 bg-transparent backdrop-blur-[150px] rounded-3xl text-center ${buttonClass}`}
          >
            <a href="/BookATicket">View More</a>
          </ScriptBtn>
        </div>
      </div>
      <div className="mt-9 mb-4 text-5xl font-bold text-center">
        DAILY SCHEDULE{" "}
      </div>
      <div className="grid-cols-2">
        <div className="px-4">
          <h4 className="font-bold text-center">
            Welcome to the Script Conference! Here’s What You Can Expect
          </h4>
          <p className="text-center">
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
          <div className="flex justify-center">
            <ScriptBtn
              className={`text-white inline-block bg-gradient-to-b from-blue-300 to-purple-500 mt-9 bg-transparent backdrop-blur-[150px] mb-5 rounded-3xl text-center ${buttonClass}`}
            >
              Download Schedule
            </ScriptBtn>
          </div>
        </div>
        <Footer color="purple" />
      </div>
    </section>
  );
};

export default About;

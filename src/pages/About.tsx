import React, { useState } from "react";
import NavBar from "../components/NavBar";
import ScriptBtn from "../components/ScriptBtn";
import Socials from "../components/Socials";
import { Link } from "react-router-dom";

const About = (buttonClass) => {
  // Declare state hooks inside the component
  const [hoverNetworking, setHoverNetworking] = useState(false);
  const [hoverExclusiveContent, setHoverExclusiveContent] = useState(false);
  const [hoverIndustryExperts, setHoverIndustryExperts] = useState(false);

  return (
    <section className="min-h-screen">
      <NavBar
        buttonClass="bg-gradient-to-b from-blue-300 to-purple-500 hover:bg-blue-700"
        imageSrc="/img/Logoblue.svg"
      />
      <div className="ml-11 mr-11">
        <div className="lg:py-20 mt-5 p-10 bg-gradient-to-b from-blue-300 to-purple-500 rounded-lg w-full text-white">
          <div className="text-center">
            <h1 className="font-bold text-lg tracking-widest">
              ABOUT SCRIPT CONFERENCE
            </h1>
            <p className="my-4">
              Bringing together the brightest minds in social media to inspire,
              connect, and drive change
            </p>
            <ScriptBtn
              className={`border border-white mt-9 bg-transparent backdrop-blur-[150px] rounded-3xl text-center ${buttonClass}`}
            >
              <a href="/BookATicket">Book A Ticket</a>
            </ScriptBtn>
          </div>
        </div>

        <div className="text-center">
          <h1 className="bg-white my-6 font-bold text-xl">
            OUR MISSION & VISION
          </h1>
          <div className="text-center">
            <div>
              <h1 className=" text-center font-bold text-3xl lg:text-black text-purple-700">
                Our Mission
              </h1>
              <div className="lg:flex lg:justify-between items-center mx-5 lg:gap-80">
                <p>
                  At Script we believe in empowering influencers <br />
                  to create meaningful connections and elevate <br />
                  their platforms with the latest trends and tools
                </p>

                <div className="flex items-center justify-between w-full p-4 ">
                  {/* <img
                    className="hidden md:block absolute right-7 pt-24 w-[200px]"
                    src="/bookholding.png"
                  /> */}
                </div>
              </div>
            </div>
            <div className="">
              <div className="lg:flex lg:justify-between items-center  lg:gap-80 text-center">
                <h1 className="font-bold text-3xl lg:text-black text-purple-700 text-center">
                  Our Vision
                </h1>
                <p className="text-center ">
                  At Script our vision is to create a global <br />
                  community where influencers, creators, and <br />
                  brands can come together to inspire, innovate, <br />
                  and drive meaningful change in the digital landscape.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 p-4">
                {/* <img className="hidden md:block" src="/eyee.png" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center">
          <h1 className="font-bold text-3xl pt-12">WHO ATTENDS SCRIPT?</h1>
          <h4>
            SCRIPT connects influencers, content creators, and industry
            professionals from all over Syria. Attendees are passionate about
            social media, eager to grow, and ready to make an impact.
          </h4>
          <h3 className="font-bold">Here's who you'll meet at SCRIPT:</h3>
        </div>
      </div>

      <div className="text-center pt-5">
        <h1 className="font-bold text-2xl pb-9">WHY SCRIPT?</h1>

        <div className="lg:flex lg:justify-center grid grid-rows-3 lg:gap-4 m-5">
          <div
            className="relative text-center lg:px-15 bg-white text-black hover:bg-gradient-to-r from-orange-400 to-pink-500 border border-black font-bold hover:text-white p-8 lg:w-[200px] lg:h-40 rounded-xl flex justify-between items-center"
            onMouseEnter={() => setHoverNetworking(true)}
            onMouseLeave={() => setHoverNetworking(false)}
          >
            Networking
            <h2 className="font-bold text-3xl text-black">+</h2>
          </div>

          <div
            className="relative text-center lg:px-15 bg-white text-black hover:bg-gradient-to-b from-blue-300 to-purple-500 border border-black font-bold hover:text-white p-8 lg:w-[200px] lg:h-40 rounded-xl flex justify-between items-center"
            onMouseEnter={() => setHoverExclusiveContent(true)}
            onMouseLeave={() => setHoverExclusiveContent(false)}
          >
            Exclusive Content
            <h2 className="font-bold text-3xl text-black">+</h2>
          </div>

          <div
            className="relative text-center lg:px-15 bg-white text-black hover:bg-gradient-to-b from-yellow-300 to-orange-400 border border-black font-bold hover:text-white p-8 lg:w-[200px] lg:h-40 rounded-xl flex justify-between items-center"
            onMouseEnter={() => setHoverIndustryExperts(true)}
            onMouseLeave={() => setHoverIndustryExperts(false)}
          >
            Industry Experts
            <h2 className="font-bold text-3xl text-black">+</h2>
          </div>
        </div>

        {hoverNetworking && (
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center mt-4 text-gray-800 bg-white p-2">
            Connect with professionals in the industry.
          </div>
        )}
        {hoverExclusiveContent && (
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 text-gray-800 bg-white p-2 rounded">
            Access premium articles and insights.
          </div>
        )}
        {hoverIndustryExperts && (
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 text-gray-800 bg-white p-2 rounded">
            Learn from experienced industry leaders.
          </div>
        )}
      </div>
      <div className="lg:mx-14 lg:p-5 mt-16  rounded-3xl bg-gradient-to-b from-blue-300 to-purple-500">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-12 items-center justify-center">
          <div className="flex flex-col items-center">
            <img className="inline" src="../public/img/a.png" />
            <div className="translate-y-[-30%]">
              <Socials name="Kristin" work="influencer" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src="../public/img/b.png" />
            <div className="translate-y-[-30%]">
              <Socials name="Jerome Bell" work="influencer" />
            </div>
          </div>
          <div className="hidden md:block flex-col items-center">
            <img src="../public/img/c.png" />
            <div className="translate-y-[-30%]">
              <Socials name="Jacob Jones" work="influencer" />
            </div>
          </div>
          <div className="hidden md:block flex-col items-center">
            <img src="../public/img/d.png" />
            <div className="translate-y-[-30%]">
              <Socials name="Cameron Wil" work="influencer" />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <ScriptBtn
            className={`border border-white mt-9 bg-transparent backdrop-blur-[150px] rounded-3xl text-center ${buttonClass}`}
          >
            <a href="/BookATicket">View More</a>
          </ScriptBtn>
        </div>
      </div>
      <div className="mt-9 text-5xl font-bold text-center">DAILY SCHEDULE </div>
      <div className="grid-cols-2">
        <div className="">
          <h4 className="font-bold">
            Welcome to the Script Conference! Here’s What You Can Expect
          </h4>
          <p>
            Join us for an immersive three-day event where industry leaders,
            influencers, and creators come together to explore the future of
            digital influence. Each day is packed with insightful sessions,
            inspiring keynotes, and opportunities to connect with like-minded
            professionals.
          </p>
          <ScriptBtn
            className={`text-white bg-gradient-to-b from-blue-300 to-purple-500 mt-9 bg-transparent backdrop-blur-[150px] rounded-3xl text-center ${buttonClass}`}
          >
            Download Schedule
          </ScriptBtn>
        </div>
        <div>
          <div className="mt-11 mb-16 grid grid-cols-3  gap-4 justify-items-center lg:flex lg:flex-row lg:justify-center lg:space-x-[70px]">
            <img src="/img/Logxo.png" className="h-10 mx-2" />
            <img src="/img/Loxgo.png" className="h-10 mx-2" />
            <img src="/img/paypal.png" className="h-10 mx-2" />
            <img src="/img/visa.png" className="h-10 mx-2" />
            <img src="/oo.png" className="h-10 mx-2" />
            <img src="/img/apple.png" className="h-10 mx-2" />
          </div>
        </div>
        <div className=" relative flex flex-col  lg:pt-32 lg:pb-32 items-center gap-2 bg-gradient-to-b from-blue-300 to-purple-500 rounded-[2rem] py-8 mx-3 lg:flex-row lg:justify-between lg:gap-4 lg:py-16 lg:px-12">
          <div className="text-center lg:pl-44 -lg:text-left">
            <img
              src="/img/Vector.svg"
              className="w-[60%] lg:w-full mx-auto lg:mx-0"
            />
            <p className="text-white text-sm lg:text-base lg:pt-2">
              Syrian Content Creators Conference
            </p>
          </div>

          <div className="text-center lg:pr-44">
            <h3 className="text-white font-bold text-lg lg:text-5xl">
              Follow Us
            </h3>
            <div className="flex space-x-3 pt-3 justify-center">
              <a href="https://www.instagram.com/">
                <img className="w-6 lg:w-8" src="/img/insta.svg" />
              </a>
              <a href="">
                <img className="w-6 lg:w-8" src="/img/fb.svg" />
              </a>
              <a href="">
                <img className="w-6 lg:w-8" src="/img/link.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

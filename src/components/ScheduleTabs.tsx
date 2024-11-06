import React, { useState } from "react";
import Speakerss from "./home/Speakerss";

function ScheduleTabs() {
  const [activeTab, setActiveTab] = useState("morning");

  const scheduleContent = {
    morning: [
      {
        time: "9:00-10:00",
        title: "Opening & Registration",
        description:
          "Check in and grab a coffee while networking with fellow attendees.",
      },
      {
        time: "10:00-11:00",
        title: "Introduction of SCRIPT",
        description:
          "Get an inside look at the vision and mission behind SCRIPT, and discover how this conference is changing the way influencers and creators collaborate.",
      },
      {
        time: "11:00-12:00",
        title: "Keynote Address: The Future of Digital Influence",
        description:
          "A thought-provoking keynote by a leading influencer or industry expert, offering insights into the future of social media and content creation.",
      },
      {
        time: "12:00-12:30",
        title: "Quick Break",
        description:
          "A short break for refreshments and informal conversations before diving into the sessions.",
      },
    ],
    noon: [
      {
        time: "12:30-1:30",
        title: "Workshop: Monetizing Your Influence",
        description:
          "Explore proven strategies for turning your influence into revenue, from brand deals to product creation.",
      },
      {
        time: "1:30-2:30",
        title: "Networking Lunch",
        description:
          "Connect with other attendees over lunch. Use this opportunity to exchange ideas and build collaborations in a relaxed setting.",
      },
      {
        time: "2:30-3:30",
        title: "Influencer Speed Networking",
        description:
          "A fast-paced networking session where influencers and creators can meet new people and discuss potential partnerships in a structured, timed format.",
      },
      {
        time: "3:30-4:30",
        title: "Panel Discussion: The Evolution of Digital Media",
        description:
          "Industry leaders and top creators discuss the latest trends in digital media and how to stay relevant in a constantly evolving space.",
      },
      {
        time: "4:30-5:00",
        title: "Break",
        description:
          "A short break before the final sessions of the day. Take this time to refresh and get ready for the collaborative session.",
      },
    ],
    evening: [
      {
        time: "5:00-6:00",
        title: "Collaborative Content Creation Session",
        description:
          "An interactive session where creators collaborate on live content ideas and brainstorm campaigns, encouraging creativity and innovation.",
      },
      {
        time: "6:00-7:00",
        title: "Closing Remarks & Q&A",
        description:
          "Final thoughts from the keynote speaker and a panel of experts, followed by a Q&A session to answer attendee questions.",
      },
      {
        time: "7:00-8:00",
        title: "Evening Social Mixer",
        description:
          "End the day with a casual social mixer, offering drinks and light refreshments. A great way to wrap up the day and cement new connections in a relaxed setting.",
      },
    ],
  };

  return (
    <div>
      <div className="w-full max-w-lg mx-auto">
        <div className="flex justify-a bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 rounded-full py-2">
          <button
            className={`px-4 py-2 text-white rounded-full ${
              activeTab === "morning" ? "bg-white text-black" : ""
            }`}
            onClick={() => setActiveTab("morning")}
          >
            Morning time <br /> <span className="font-bold">9:00 - 12:30</span>
          </button>
          <button
            className={`px-4 py-2 text-white rounded-full ${
              activeTab === "noon" ? "bg-white text-black" : ""
            }`}
            onClick={() => setActiveTab("noon")}
          >
            Noon time <br /> <span className="font-bold">12:30 - 5:00</span>
          </button>
          <button
            className={`px-4 py-2 text-white rounded-full ${
              activeTab === "evening" ? "bg-white text-black" : ""
            }`}
            onClick={() => setActiveTab("evening")}
          >
            Evening time <br /> <span className="font-bold">5:00 - 8:00</span>
          </button>
        </div>

        <div className="mt-6">
          {scheduleContent[activeTab].map((item, index) => (
            <div key={index} className="flex items-start mb-8">
              <div className="relative flex flex-col items-center">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mb-2">
                  {index + 1}
                </div>
              </div>

              <div className="ml-4">
                <div className="text-gray-500 text-sm">{item.time}</div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default ScheduleTabs;

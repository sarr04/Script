import React from "react";
import ScriptBtn from "./ScriptBtn";
const colors = {
  orange: "bg-gradient-to-r from-orange-400 to-pink-500",
  purple: "bg-gradient-to-b from-blue-300 to-purple-50",
};
type TitleProps = {
  color: keyof typeof colors;
};

export default function Title(props: TitleProps) {
  return (
    <div>
      <div className="flex hero justify-center items-center">
        <div className="w-full max-w-5xl px-6 lg:px-0">
          <div
            className={`text-white rounded-[2rem]  pb-20 relative z-10${
              colors[props.color]
            }`}
          >
            <h2 className="text-white justify-center text-center font-bold text-3xl tracking-widest pb-3 pt-12">
              THE PREMIER CONFERENCE
              <br /> FOR SOCIAL MEDIA INFLUENCERS.
            </h2>
            <div className="flex justify-center">
              <p className="text-white font-bold text-xl pl-8 text-center">
                Learn, Connect, and Grow your
                <br /> Influence.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <ScriptBtn
                className={`m-4 border border-white rounded-[2rem] ${buttonClass}`}
              >
                <a href="/BookATicket">Book A Ticket</a>
              </ScriptBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

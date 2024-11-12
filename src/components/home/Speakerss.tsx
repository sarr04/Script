import Socials from "../Socials";
import ScriptBtn from "../ScriptBtn";
import React from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const colors = {
  pin: "bg-custom",
  blu: "bg-custom2",
};
type Speaker = {
  name: string;
  work: string;
  followers: string;
  img: string;
};

export default function Speakerss(props: {
  buttonClass: string;
  color: keyof typeof colors;
  speakerss?: Speaker[];
  limit: number;
}) {
  const { buttonClass, color, speakerss, limit } = props;

  return (
    <div id="speakerss" className="pl-12 pr-12 ">
      <div className="block justify-center items-center mt-10">
        <div
          className={`lg:rounded-[4rem] rounded-[2rem] relative z-20 pt-11 lg:px-5 ${colors[color]}`}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {speakerss && speakerss.length > 0 ? (
              speakerss.slice(0, limit).map((speaker, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center">
                    <img
                      className="inline lg:w-[200px] w-[150px]"
                      src={speaker.img}
                    />
                    <div className="translate-y-[-30%] flex">
                      <Socials
                        name={speaker.name}
                        work={speaker.work}
                        followers={speaker.followers}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <div className="text-center text-white">
                No speakers available
              </div>
            )}
          </Swiper>

          <div className="flex justify-center mt-6 pb-10">
            <ScriptBtn
              customStyles={`bg-transparent lg:px-24 px-16 border-2 bg-white/10 backdrop-blur-[150px] border-white text-white ${buttonClass}`}
              className="mb-8 "
            >
              <a href="./ScriptBtn.tsx">View All</a>
            </ScriptBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

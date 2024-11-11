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

export default function Speakers(props: {
  buttonClass: string;
  color: keyof typeof colors;
}) {
  const { buttonClass, color } = props;

  return (
    <div id="spearkers" className="pl-12 pr-12 ">
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
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  className="inline lg:w-[200px] w-[150px]"
                  src="../public/img/a.png"
                />
                <div className="translate-y-[-30%] flex">
                  <Socials
                    name="Krisatin"
                    work="influencer"
                    followers="500k Followers"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  className="inline lg:w-[200px] w-[150px]"
                  src="../public/img/b.png"
                />
                <div className="translate-y-[-30%] ">
                  <Socials
                    name="Jerome Bell"
                    work="influencer"
                    followers="20k Followers"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  className="inline lg:w-[200px] w-[150px]"
                  src="../public/img/c.png"
                />
                <div className="translate-y-[-30%]">
                  <Socials
                    name="Jacob Jones"
                    work="influencer"
                    followers="500k Followers"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  className="inline lg:w-[200px] w-[150px]"
                  src="../public/img/d.png"
                />
                <div className="translate-y-[-30%]">
                  <Socials
                    name="Cameron Wil"
                    work="influencer"
                    followers="200k Followers"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="hidden md:flex flex-col items-center">
              <img
                className="inline lg:w-[200px] w-[150px]"
                src="../public/img/e.png"
              />
              <div className="translate-y-[-30%]">
                <Socials
                  name="Devon Lane"
                  work="influencer"
                  followers="500k Followers"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="hidden md:flex flex-col items-center">
              <img
                className="inline lg:w-[200px] w-[150px]"
                src="../public/img/f.png"
              />
              <div className="translate-y-[-30%]">
                <Socials
                  name="Ronald Richards"
                  work="influencer"
                  followers="500k Followers"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="hidden md:flex flex-col items-center">
              <img
                className="inline lg:w-[200px] w-[150px]"
                src="../public/img/g.png"
              />
              <div className="translate-y-[-30%]">
                <Socials
                  name="Jane Cooper"
                  work="influencer"
                  followers="500k Followers"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="hidden md:flex flex-col items-center">
              <img
                className="inline lg:w-[200px] w-[150px]"
                src="../public/img/h.png"
              />
              <div className="translate-y-[-30%]">
                <Socials
                  name="Marvin McKinney"
                  work="influencer"
                  followers="400k Followers"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  className="inline lg:w-[200px] w-[150px]"
                  src="../public/img/a.png"
                />
                <div className="translate-y-[-30%] flex">
                  <Socials
                    name="Krisatin"
                    work="influencer"
                    followers="500k Followers"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  className="inline lg:w-[200px] w-[150px]"
                  src="../public/img/b.png"
                />
                <div className="translate-y-[-30%]">
                  <Socials
                    name="Jerome Bell"
                    work="influencer"
                    followers="20k Followers"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  className="inline lg:w-[200px] w-[150px]"
                  src="../public/img/c.png"
                />
                <div className="translate-y-[-30%]">
                  <Socials
                    name="Jacob Jones"
                    work="influencer"
                    followers="500k Followers"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  className="inline lg:w-[200px] w-[150px]"
                  src="../public/img/d.png"
                />
                <div className="translate-y-[-30%]">
                  <Socials
                    name="Cameron Wil"
                    work="influencer"
                    followers="200k Followers"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="hidden md:flex flex-col items-center">
              <img
                className="inline lg:w-[200px] w-[150px]"
                src="../public/img/e.png"
              />
              <div className="translate-y-[-30%]">
                <Socials
                  name="Devon Lane"
                  work="influencer"
                  followers="500k Followers"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="hidden md:flex flex-col items-center">
              <img
                className="inline lg:w-[200px] w-[150px] "
                src="../public/img/f.png"
              />
              <div className="translate-y-[-30%]">
                <Socials
                  name="Ronald Richards"
                  work="influencer"
                  followers="500k Followers"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="hidden md:flex flex-col items-center">
              <img
                className="inline lg:w-[200px] w-[150px]"
                src="../public/img/g.png"
              />
              <div className="translate-y-[-30%]">
                <Socials
                  name="Jane Cooper"
                  work="influencer"
                  followers="500k Followers"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="hidden md:flex flex-col items-center">
              <img
                className="inline lg:w-[200px] w-[150px]"
                src="../public/img/h.png"
              />
              <div className="translate-y-[-30%] ">
                <Socials
                  name="Marvin McKinney"
                  work="influencer"
                  followers="400k Followers"
                />
              </div>
            </SwiperSlide>
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

import Socials from "../Socials";
import ScriptBtn from "../ScriptBtn";
import "./style.css";

import { Link } from "react-router-dom";
const colors = {
  pin: "bg-custom",
  blu: "bg-custom2",
};
export type Speaker = {
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
  showAll: boolean;
}) {
  const { buttonClass, color, speakerss, limit } = props;

  return (
    <div id="speakerss" className="lg:pl-12 lg:pr-12 ">
      <div className=" items-center mt-10">
        <div
          className={`lg:rounded-[4rem] rounded-[2rem] relative z-20 pt-11 lg:px-5 ${colors[color]}`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-between space-x-5 md:space-x-0 w-full">
            {speakerss && speakerss.length > 0 ? (
              speakerss.slice(0, limit).map((speaker, index) => (
                <div style={{}} key={index}>
                  <div className="flex flex-col items-center">
                    <img
                      className="inline lg:w-[200px] w-[120px]"
                      src={speaker.img}
                    />
                    <div className="translate-y-[-30%] flex ">
                      <Socials
                        name={speaker.name}
                        work={speaker.work}
                        followers={speaker.followers}
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-white">
                No speakers available
              </div>
            )}
          </div>
          {!props.showAll && (
            <div className="flex justify-center mt-6 pb-10">
              <ScriptBtn
                customStyles={`bg-transparent lg:px-24 px-16 border-2 bg-white/10 backdrop-blur-[150px] border-white text-white ${buttonClass}`}
                className="mb-8 "
              >
                <Link to="/Speakers">View All</Link>
              </ScriptBtn>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

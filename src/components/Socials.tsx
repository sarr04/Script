import { Link } from "react-router-dom";

export default function Socials(props) {
  return (
    <div>
      <div className=" text-white text-[8px] lg:text-lg lg:py-4 lg:px-8 rounded-xl translate-y-2 lg:rounded-3xl overflow-hidden bg-white/10  backdrop-blur-[150px]  my-4 ">
        {props.followers}
      </div>
      <div className=" text-white flex flex-col items-center text-xs lg:text-lg ">
        <div className="font-bold text-xs lg:text-lg  "> {props.name}</div>
        <div> {props.work}</div>
      </div>
    </div>
  );
}

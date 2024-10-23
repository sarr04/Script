import { Link } from "react-router-dom";

export default function Socials(props) {
  return (
    <div>
      <div className=" grid grid-cols-4 gap-6 px-8 py-4 rounded-3xl overflow-hidden bg-white/10  backdrop-blur-[150px]  my-4 ">
        <Link to="https://x.com/?lang=en">
          <img className="w-[25px]" src="../public/img/x.png" />
        </Link>
        <Link to="https://www.linkedin.com/login">
          <img className="w-[25px]" src="../public/img/in.png" />
        </Link>
        <Link to="https://www.facebook.com/">
          <img className="w-[25px]" src="../public/img/facebook.png" />
        </Link>
        <Link to="https://www.instagram.com/">
          <img className="w-[25px]" src="../public/img/ig.png" />
        </Link>
      </div>
      <div className=" text-white flex flex-col items-center">
        <p className="font-bold">{props.name}</p>
        <p>{props.work}</p>
      </div>
    </div>
  );
}

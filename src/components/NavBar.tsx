import { Link } from "react-router-dom";
import ScriptBtn from "./ScriptBtn";

function NavBar({ buttonClass, imageSrc }) {
  return (
    <header className="sticky top-0 bg-white shadow mb-2 p-2 z-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 items-center">
          <Link to="/">
            <img className="lg:pt-4 w-15 pr-10" src={imageSrc} />
          </Link>

          <div className="flex justify-center pl-7">
            <nav className="lg:space-x-12 space-x-2 font-bold">
              <Link to="/About">About</Link>
              <Link to="/Speakers">Speakers</Link>
              <Link to="/Schedule">Schedule</Link>
            </nav>
          </div>

          <div className="flex justify-end pt-2">
            <ScriptBtn className={`rounded-[2rem] text-white ${buttonClass}`}>
              <Link to="/BookATicket">Book A Ticket</Link>
            </ScriptBtn>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;

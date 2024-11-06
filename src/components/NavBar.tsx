import { useState } from "react";
import { Link } from "react-router-dom";
import ScriptBtn from "./ScriptBtn";

function NavBar({ buttonClass, imageSrc }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow mb-2 p-2 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img className="lg:pt-4 w-15 pr-10" src={imageSrc} />
          </Link>

          <nav className="hidden lg:flex space-x-12 text-xl font-bold">
            <Link to="/About">About</Link>
            <Link to="/Speakers">Speakers</Link>
            <Link to="/Schedule">Schedule</Link>
          </nav>

          <button
            className="lg:hidden text-xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div className="hidden lg:flex">
            <ScriptBtn className={`rounded-[2rem] text-white ${buttonClass}`}>
              <Link to="/BookATicket">Book A Ticket</Link>
            </ScriptBtn>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 bg-white shadow-md rounded-lg p-4 flex flex-col divide-y divide-gray-300 text-lg font-bold">
            <Link
              to="/About"
              onClick={toggleMobileMenu}
              className="py-2 hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              to="/Speakers"
              onClick={toggleMobileMenu}
              className="py-2 hover:bg-gray-100"
            >
              Speakers
            </Link>
            <Link
              to="/Schedule"
              onClick={toggleMobileMenu}
              className="py-2 hover:bg-gray-100"
            >
              Schedule
            </Link>
            <div className="pt-2">
              <ScriptBtn
                className={`rounded-[2rem] text-white w-full ${buttonClass}`}
                onClick={toggleMobileMenu}
              >
                <Link to="/BookATicket">Book A Ticket</Link>
              </ScriptBtn>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default NavBar;

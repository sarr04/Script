import { RxHamburgerMenu } from "react-icons/rx";
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
            <img
              className="lg:pt-4 lg:h-[50px] h-[25px] pr-10"
              src={imageSrc}
            />
          </Link>

          <nav className="hidden lg:flex space-x-12 text-xl ">
            <Link to="/About">About</Link>
            <a href="#speakerss">Speakers</a>
            <Link to="/Schedule">Schedule</Link>
          </nav>

          <button
            className="lg:hidden text-xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <RxHamburgerMenu />
          </button>

          <div className="hidden lg:flex">
            <ScriptBtn className={`rounded-[2rem] text-white ${buttonClass}`}>
              <Link to="/BookATicket">Book A Ticket</Link>
            </ScriptBtn>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-4 text-lg font-bold">
            <button
              className="absolute top-4 right-4 text-xl"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="flex flex-col items-center space-y-4">
              <Link
                to="/About"
                onClick={toggleMobileMenu}
                className="hover:bg-gray-100 p-2 rounded"
              >
                About
              </Link>
              <Link
                to="/Speakers"
                onClick={toggleMobileMenu}
                className="hover:bg-gray-100 p-2 rounded"
              >
                Speakers
              </Link>
              <Link
                to="/Schedule"
                onClick={toggleMobileMenu}
                className="hover:bg-gray-100 p-2 rounded"
              >
                Schedule
              </Link>
              <ScriptBtn
                className={`rounded-[2rem] text-white w-full mt-4 ${buttonClass}`}
                onClick={toggleMobileMenu}
              >
                <Link to="/BookATicket">Book A Ticket</Link>
              </ScriptBtn>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;

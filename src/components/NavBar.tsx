import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ScriptBtn from "./ScriptBtn";

function NavBar({ buttonClass, imageSrc }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 border-y bg-white mb-2 p-4 md:p-2 z-50">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              className="lg:pt-4 lg:h-[50px] h-[25px] pr-10"
              src={imageSrc}
            />
          </Link>

          <nav className="hidden lg:flex space-x-12 text-xl">
            <NavLink
              className={(navClass) =>
                navClass.isActive
                  ? "font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
                  : "text-black"
              }
              to="/About"
            >
              About
            </NavLink>

            <NavLink
              className={(navClass) =>
                navClass.isActive
                  ? "font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
                  : "text-black"
              }
              to="/Speakers"
            >
              Speakers
            </NavLink>
            <NavLink
              className={(navClass) =>
                navClass.isActive
                  ? "bg-gradient-to-r from-pink-400 to-orange-500 text-transparent bg-clip-text"
                  : "text-black"
              }
              to="/Schedule"
            >
              Schedule
            </NavLink>
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
              <NavLink
                to="/About"
                onClick={toggleMobileMenu}
                className={(navClass) =>
                  navClass.isActive
                    ? "font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
                    : "text-black"
                }
              >
                About
              </NavLink>

              <NavLink
                to="/Speakers"
                onClick={toggleMobileMenu}
                className="text-black"
              >
                Speakers
              </NavLink>
              <NavLink
                to="/Schedule"
                onClick={toggleMobileMenu}
                className={(navClass) =>
                  navClass.isActive
                    ? "bg-gradient-to-r from-pink-400 to-orange-500 text-transparent bg-clip-text"
                    : "text-black"
                }
              >
                Schedule
              </NavLink>

              <ScriptBtn
                className={`rounded-[2rem] text-white w-full mt-4 ${buttonClass}`}
                onClick={toggleMobileMenu}
              >
                <NavLink to="/BookATicket">Book A Ticket</NavLink>
              </ScriptBtn>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;

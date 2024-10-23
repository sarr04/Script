import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="sticky top-0 bg-white shadow p-2  z-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 items-center">
          <img className="lg:pt-4 w-15 pr-10 " src="./public/img/Logo.png" />

          <div className="flex justify-center pl-7">
            <nav className="lg:space-x-12  space-x-2 font-bold">
              <Link to="/About">About</Link>
              <Link to="/Speakers">Speakers</Link>
              <Link to="/Schedule">Schedule</Link>
            </nav>
          </div>
          <div className="flex justify-end pt-2">
            <button className="rounded-full lg:w-50 lg:p-4 hover:bg-gray-500 bg-center bg-gradient-to-r from-orange-400 to-pink-500 text-white border-white text-sm px-1 ">
              Book The Ticket
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default NavBar;

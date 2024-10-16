import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="grid grid-cols-3 ">
      <img className="pt-4" src="./public/img/Logo.png" />

      <div className="flex justify-center ">
        <nav className="space-x-12 font-bold">
          <Link to="/About">About</Link>
          <Link to="/Speakers">Speakers</Link>
          <Link to="/Schedule">Schedule</Link>
        </nav>
      </div>
      <div className="flex justify-end pt-2">
        <button className="rounded-full w-50 hover:bg-gray-500 bg-center bg-pink-700 text-white border-white p-1 ">
          book the ticket
        </button>
      </div>
    </header>
  );
}
export default NavBar;

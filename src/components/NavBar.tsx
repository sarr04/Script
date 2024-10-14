import { Link } from "react-router-dom";
function NavBar() {
  return (
    <header>
      <nav>
        <Link to="/About">About</Link>
        <Link to="/Schedule">Speakers</Link>
        <Link to="Speakers">Schedule</Link>
        <Link to="BookATicket">Book a ticket</Link>
      </nav>
    </header>
  );
}
export default NavBar;

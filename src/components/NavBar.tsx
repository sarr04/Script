import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <Link to="./NavBar/About.tsx">About</Link>
      <Link to="./NavBar/Speakers.tsx">Speakers</Link>
      <Link to="./NavBar/Schedule.tsx">Schedule</Link>
      <Link to="./NavBar/BookATicket.tsx">Book a ticket</Link>
    </div>
  );
}
export default NavBar;

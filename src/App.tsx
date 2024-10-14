import { Route, Switch, Redirect } from "react-router-dom";
import About from "./NavBar/About";
import Speakers from "./NavBar/Speakers";
import Schedule from "./NavBar/Schedule";
import BookATicket from "./NavBar/BookATicket";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <About />
        <Switch>
          <Route path="/">
            <Redirect to="/Home" />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Speakers">
            <Speakers />
          </Route>
          <Route path="/Schedule">
            <Schedule />
          </Route>
          <Route path="/BookATicket">
            <BookATicket />
          </Route>
        </Switch>
      </main>

      <Schedule />
    </div>
  );
}
export default App;

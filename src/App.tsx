import { Route, Switch, Redirect } from "react-router-dom";
import About from "./NavBar/About";
import Speakers from "./NavBar/Speakers";
import Schedule from "./NavBar/Schedule";
import BookATicket from "./NavBar/BookATicket";
function App() {
  return (
    <div>
      <main>
        <About />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Home" />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Speakers" exact>
            <Speakers />
          </Route>
          <Route path="./Schedule">
            <Schedule />
          </Route>
          <Route path="./BookATicket">
            <BookATicket />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
export default App;

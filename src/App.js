import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feedback from "./Feedback";
import Form from "./Form";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/feedback">
          {/* <Feedback /> */}
          <Form />
        </Route>
        <Route path="/contact">Mobile number : 8104355174</Route>
        <Route path="/">
          <Nav />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import SignIn from "./SignIn";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
      </Switch>
    </div>
  );
}

export default App;

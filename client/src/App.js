import SignIn from "./SignIn";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./SignUp";
import StudentHome from "./StudentHome";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/student_home" component={StudentHome}></Route>
      </Switch>
    </div>
  );
}

export default App;

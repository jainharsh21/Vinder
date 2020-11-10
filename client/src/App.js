import SignIn from "./SignIn";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./SignUp";
import StudentHome from "./StudentHome";
import StudentChapterHome from "./StudentChapterHome";
import AdminHome from "./AdminHome";
import AddEventForm from "./AddEventForm";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/student_home" component={StudentHome}></Route>
        <Route
          exact
          path="/student_chapter_home"
          component={StudentChapterHome}
        ></Route>
        <Route exact path="/admin_home" component={AdminHome} />
        <Route exact path="/add_event" component={AddEventForm} />
      </Switch>
    </div>
  );
}

export default App;

import { useEffect } from "react";

const { default: Navbar } = require("./Navbar");

function StudentChapterHome(props) {
  useEffect(() => {
    if (!window.localStorage.getItem("userData")) {
      props.history.replace("/");
    }
    const userData = JSON.parse(window.localStorage.getItem("userData"));
    (async () => {
      const data = await fetch(`http://localhost:4000/events/${userData.id}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .catch((e) => console.log(e));
      console.log(data.data);
    })();
  }, []);
  return (
    <div>
      <Navbar history={props.history} />
      Student Chapter Home
    </div>
  );
}

export default StudentChapterHome;

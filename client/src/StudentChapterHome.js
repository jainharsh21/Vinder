import { useEffect, useState } from "react";
import MiniEventCard from "./MiniEventCard";

const { default: Navbar } = require("./Navbar");

function StudentChapterHome(props) {
  const [events, setEvents] = useState([]);
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
      setEvents(data.data);
    })();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Navbar history={props.history} />
      <div style={{ padding: "8px" }}>
        <h2 style={{ fontFamily: "Turret Road", fontSize: "20px" }}>OUR EVENTS</h2>
      </div>
      <div
        style={{
          paddingTop: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {events.map((e) => (
          <MiniEventCard event={e} key={e.eventid} />
        ))}
      </div>
    </>
  );
}

export default StudentChapterHome;

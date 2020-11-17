import { useEffect, useState } from "react";
import { Fab } from "ui-neumorphism";
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
        <h2 style={{ fontFamily: "Turret Road", fontSize: "20px" }}>
          OUR EVENTS
        </h2>
      </div>
      <div
        style={{
          paddingTop: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {events.map((e) => (
          <MiniEventCard event={e} key={e.eventid} />
        ))}
      </div>
      <div>
        <Fab
          onClick={() => {
            props.history.push("/add_event");
          }}
          size="large"
          right
          style={{ position: "absolute", top: "80%", right: "10%" }}
        >
          <span style={{ fontSize: "30px", marginBottom: "4px" }}>&#43;</span>
        </Fab>
      </div>
    </>
  );
}

export default StudentChapterHome;

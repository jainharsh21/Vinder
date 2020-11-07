import React, { useEffect, useState } from "react";
import { IconButton } from "ui-neumorphism";
import Navbar from "./Navbar";
import "./Navbar.css";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import EventCard from "./EventCard";
import { useTransition, animated } from "react-spring";

function StudentHome() {
  const [data, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:4000/events", {
        method: "GET",
      })
        .then((res) => res.json())
        .catch((e) => console.log(e));
      console.log(data.data);
      setEventData(data.data);
      setLoading(false);
    })();
  }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const [index, set] = React.useState(0);
  const onClick = React.useCallback(() => set((state) => (state + 1) % 3), []);
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(-4%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return !loading ? (
    <div>
      <Navbar />
      <div
        style={{
          height: "88vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <IconButton
          rounded
          text={false}
          color="black"
          style={{ padding: "8px" }}
        >
          <ChevronLeft />
        </IconButton>
        {transitions.map(({ item, props, key }) => {
          return ({ style }) => (
            <animated.div style={{ ...props, background: "lightpink" }}>
              <EventCard eventData={data[0]} />
            </animated.div>
          );
        })}
        <IconButton
          rounded
          onClick={onClick}
          text={false}
          color="black"
          style={{ padding: "8px" }}
        >
          <ChevronRight />
        </IconButton>
      </div>
    </div>
  ) : (
    <> Loading </>
  );
}

export default StudentHome;

import React from "react";
import { IconButton } from "ui-neumorphism";
import Navbar from "./Navbar";
import "./Navbar.css";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import EventCard from "./EventCard";
import { useTransition, animated } from "react-spring";

function StudentHome() {
  const pages = [
    ({ style }) => (
      <animated.div style={{ ...style, background: "lightpink" }}>
        <EventCard />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, background: "lightblue" }}>
        <EventCard />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, background: "lightgreen" }}>
        <EventCard />
      </animated.div>
    ),
  ];
  const [index, set] = React.useState(0);
  const onClick = React.useCallback(() => set((state) => (state + 1) % 3), []);
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(-4%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  return (
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
          const Page = pages[item];
          return <Page key={key} style={props} />;
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
  );
}

export default StudentHome;

import React, { useEffect, useState } from "react";
import { IconButton } from "ui-neumorphism";
import Navbar from "./Navbar";
import "./Navbar.css";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import EventCard from "./EventCard";
import { useTransition, animated } from "react-spring";

function StudentHome(props) {
  const [data, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLeftClicked, setIsLeftClicked] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem("userData")) {
      props.history.replace("/");
    }
    (async () => {
      const data = await fetch("http://localhost:4000/events", {
        method: "GET",
      })
      .then((res) => res.json())
      .catch((e) => console.log(e));
      const temp = data.data.map((c) => {
        return ({ style }) => (
          <animated.div style={{ ...style }}>
            <EventCard eventData={c} />
          </animated.div>
        );
      });
      setEventData(temp);
      setLoading(false);
    })();
    // eslint-disable-next-line
  }, []);

  const [index, set] = React.useState(0);
  const onClick = React.useCallback(() => {
    setIsLeftClicked(false);
    set((state) => (state + 1) % data.length);
  }, [data]);
  const onLeftClick = React.useCallback(() => {
    setIsLeftClicked(true);
    if (index === 0) set(data.length - 1);
    else set((state) => state - 1);
  }, [index, data]);
  const transitions = useTransition(index, (p) => p, {
    from: {
      opacity: 0,
      transform: !isLeftClicked
        ? "translate3d(100%,0,0)"
        : "translate3d(0,0,0)",
    },
    enter: {
      opacity: 1,
      transform: !isLeftClicked
        ? "translate3d(-4%,0,0)"
        : "translate3d(4%,0,0)",
    },
    leave: {
      opacity: 0,
      transform: !isLeftClicked
        ? "translate3d(-50%,0,0)"
        : "translate3d(50%,0,0)",
    },
  });

  return !loading ? (
    <div>
      <Navbar history={props.history} />
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
          onClick={onLeftClick}
          color="black"
          style={{ padding: "8px" }}
        >
          <ChevronLeft />
        </IconButton>
        {transitions.map(({ item, props, key }) => {
          console.log(data[item]);
          const Page = data[item];
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
  ) : (
    <> Loading </>
  );
}

export default StudentHome;

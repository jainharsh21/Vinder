import React from "react";
import { IconButton } from "ui-neumorphism";
import Navbar from "./Navbar";
import "./Navbar.css";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import EventCard from "./EventCard";

function StudentHome() {
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
        <EventCard />
        <IconButton
          rounded
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

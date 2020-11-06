import React from "react";
import { NeuCard } from "neumorphic-ui";
import Navbar from "./Navbar";
import "./Navbar.css";
import img1 from "./assets/csi.png";
import { IconButton, Typography } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

function StudentHome() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "88vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <IconButton>
          <ChevronLeft />
        </IconButton>
        <NeuCard width="350px" height="400px">
          <img alt="hello" width="100%" height="75%" src={img1} />
          <Typography
            style={{
              paddingTop: "8px",
              fontFamily: "Turret Road",
              fontSize: "14px",
            }}
          >
            We hope to see you at the next industry event or tradeshow! Stop by
            our booth to learn more about CSI's product innovations and to meet
            our business ...
          </Typography>
        </NeuCard>
        <IconButton>
          <ChevronRight />
        </IconButton>
      </div>
    </div>
  );
}

export default StudentHome;

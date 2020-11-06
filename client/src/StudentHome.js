import React from "react";
import { Card } from "ui-neumorphism";
import Navbar from "./Navbar";
import "./Navbar.css";
import img1 from "./assets/itsa.png";
import { IconButton, Typography } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

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
        <IconButton>
          <ChevronLeft />
        </IconButton>
        <Card width={380} height={450}>
          <img style = {{paddingTop : "20px"}} alt="hello" src={img1} width = "90%" height = "80%" />
          <Typography
            style={{
              padding: "8px",
              fontFamily: "Turret Road",
              fontSize: "13px",
            }}
          >
            ITSA stands for Information technology students association, it is a committee created by the students for the students in order to empower their skills 
          </Typography>
        </Card>
        <IconButton>
          <ChevronRight />
        </IconButton>
      </div>
    </div>
  );
}

export default StudentHome;

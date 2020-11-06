import React from "react";
import { NeuCard } from "neumorphic-ui";
import Navbar from "./Navbar";
import "./Navbar.css";

function StudentHome() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          height: "88vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NeuCard width="350px" height="400px"></NeuCard>
      </div>
    </div>
  );
}

export default StudentHome;

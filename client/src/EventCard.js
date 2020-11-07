import React from "react";
import { Typography } from "ui-neumorphism";
import { Card } from "ui-neumorphism";
import img1 from "./assets/itsa.png";


function EventCard() {
  return (
    <Card width={380} height={450}>
      <img
        style={{ paddingTop: "20px" }}
        alt="hello"
        src={img1}
        width="90%"
        height="80%"
      />
      <Typography
        style={{
          padding: "8px",
          fontFamily: "Turret Road",
          fontSize: "13px",
        }}
      >
        ITSA stands for Information technology students association, it is a
        committee created by the students for the students in order to empower
        their skills
      </Typography>
    </Card>
  );
}

export default EventCard;

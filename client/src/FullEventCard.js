import React from "react";
import { Typography } from "ui-neumorphism";
import { Card } from "ui-neumorphism";

function FullEventCard(props) {
  console.log(props.eventData);
  const { summary, imageurl } = props.eventData;
  return (
    <Card width={380} height={450}>
      <img
        style={{ paddingTop: "20px" }}
        alt="hello"
        src={imageurl}
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
        {summary}
      </Typography>
    </Card>
  );
}

export default FullEventCard;

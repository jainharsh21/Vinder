import React from "react";
import { Card, Typography } from "ui-neumorphism";

function MiniEventCard({
  event: {
    chapterName,
    date,
    description,
    eventId,
    eventname,
    imageurl,
    summary,
  },
}) {
  return (
    <div>
      <Card height={220} width={200}>
        <img
          style={{ paddingTop: "20px" }}
          alt="hello"
          src={imageurl}
          width="90%"
          height="70%"
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
    </div>
  );
}

export default MiniEventCard;

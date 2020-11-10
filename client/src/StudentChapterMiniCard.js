import React from "react";
import { Button, Card, Typography } from "ui-neumorphism";

function StudentChapterMiniCard({
  chapter: { id, description, imageurl, name },
}) {
  return (
    <div>
      <Card height={260} width={220}>
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
          {name}
        </Typography>
        <Typography
          style={{
            paddingBottom: "8px",
            fontSize: "13px",
          }}
        >
          {description}
        </Typography>
      </Card>
      <div style={{ padding: "20px" ,alignItems : "flex-end"}}>
        <Button>Delete</Button>
      </div>
    </div>
  );
}

export default StudentChapterMiniCard;

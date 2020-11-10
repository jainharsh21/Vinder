import React, { useEffect } from "react";
import { Button, Card, Fab, TextArea, TextField } from "ui-neumorphism";

function AddEventForm(props) {
  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem("userData"));
    console.log(userData);
    if (!userData.description) {
      props.history.replace("/");
      return;
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div style = {{paddingTop : "50px"}}>
      <Card style={{ paddingTop: "10px", width: "60%", marginLeft: "20%" }}>
        <h3 style={{ padding: "10px" }}>Add Event!</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            padding: "10px",
          }}
        >
          <TextField
            width={300}
            id="event_name"
            label="Email Name"
            name="Event Name"
          />
          <TextField width={300} id="summary" label="Summary" name="Summary" />
          <TextArea
            autoExpand
            height={100}
            width={300}
            id="description"
            label="Description"
            name="Description"
          />
          <Fab color="#000" style={{ padding: "5px" }}>
            &nbsp;<span style={{ fontSize: "24px" }}>&#9729;</span>
            &nbsp;Upload Event Image&nbsp;
          </Fab>
          <div style={{ padding: "18px" }}>
            <Button>Add Event</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AddEventForm;

import React, { useCallback, useEffect, useRef, useState } from "react";
import { storage } from "./firebase";
import { Button, Card, Fab, TextArea, TextField } from "ui-neumorphism";

function AddEventForm(props) {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState([]);
  const [src, setSrc] = useState("#");
  const hiddenFileInput = useRef(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const previewer = useCallback((input) => {
    var reader = new FileReader();

    reader.onload = function (e) {
      // document.getElementById("blah").src = e.target.result;
      setSrc(e.target.result);
      // $("#blah").attr("src", e.target.result);
    };

    reader.readAsDataURL(input);
  }, []);

  const handleClick = useCallback(
    (event) => {
      hiddenFileInput.current.click();
    },
    [hiddenFileInput]
  );

  const handleChange = useCallback(
    (event) => {
      const fileUploaded = event.target.files[0];
      previewer(fileUploaded);
      setImage(fileUploaded);
      setFile(fileUploaded);
    },
    [previewer]
  );

  const handleUpload = () => {
    console.log("in func");
    const uploadTask = storage.ref(`events/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
    console.log(url);
  };

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
    <div style={{ paddingTop: "50px" }}>
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
          <Fab onClick={handleClick} color="#000" style={{ padding: "5px" }}>
            &nbsp;<span style={{ fontSize: "24px" }}>&#9729;</span>
            &nbsp;Upload Event Image&nbsp;
          </Fab>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{ display: "none" }}
          />
          {src !== "#" ? (
            <img
              style={{ padding: "10px 0px 10px 0px" }}
              id="blah"
              height={225}
              width={225}
              alt="helloooooooooooooooo"
              src={src}
            />
          ) : null}
          <div style={{ padding: "18px" }}>
            <Button onClick={handleUpload}>Add Event</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AddEventForm;

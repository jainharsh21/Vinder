import React, { memo, useState } from "react";
import Navbar from "./Navbar";
import StudentChapterMiniCard from "./StudentChapterMiniCard";
const AdminHome = (props) => {
  const [chapters, setChapters] = useState([]);
  React.useEffect(() => {
    if (!window.localStorage.getItem("isAdmin")) {
      props.history.replace("/");
    }
    (async () => {
      const data = await fetch("http://localhost:4000/student_chapters", {
        method: "GET",
      })
        .then((res) => res.json())
        .catch((e) => console.log(e));
      console.log(data);
      setChapters(data);
    })();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Navbar history={props.history} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignContent: "center",
          width: "100%",
          padding : "20px"
        }}
      >
        {chapters.map((c) => (
          <StudentChapterMiniCard chapter = {c} key = {c.id} />
        ))}
      </div>
    </>
  );
};

export default memo(AdminHome);

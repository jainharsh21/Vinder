import React, { memo } from "react";
import Navbar from "./Navbar";
const AdminHome = (props) => {
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
    })();
  });
  return (
    <>
      <Navbar history={props.history} />
      <div>Hello MF</div>;
    </>
  );
};

export default memo(AdminHome);

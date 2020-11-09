import React, { memo } from "react";
import Navbar from "./Navbar";
const AdminHome = (props) => {
  React.useEffect(() => {
    if (!window.localStorage.getItem("isAdmin")) {
      props.history.replace("/");
    }
  });
  return (
    <>
      <Navbar history={props.history} />
      <div>Hello MF</div>;
    </>
  );
};

export default memo(AdminHome);

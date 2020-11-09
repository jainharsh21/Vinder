import React from "react";
import { Card } from "ui-neumorphism";
import { IconButton } from "@material-ui/core";

import { ExitToApp, MenuSharp } from "@material-ui/icons";

const styles = {
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

function Navbar({ history }) {
  const logout = () => {
    window.localStorage.clear();
    history.replace("/");
  };

  return (
    <Card>
      <div
        style={{
          fontFamily: "Lobster",
          fontSize: "20px",
          ...styles.navContainer,
        }}
      >
        <IconButton>
          <MenuSharp />
        </IconButton>
        <span>Vinder</span>
        <IconButton onClick={logout}>
          <ExitToApp />
        </IconButton>
      </div>
    </Card>
  );
}

export default Navbar;

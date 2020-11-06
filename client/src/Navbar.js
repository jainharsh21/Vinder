import React, { useState } from "react";
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

function Navbar() {
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
        <IconButton>
          <ExitToApp />
        </IconButton>
      </div>
    </Card>
  );
}

export default Navbar;

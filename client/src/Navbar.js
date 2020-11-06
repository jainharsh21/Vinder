import React, { useState } from "react";
import { NeuCard } from "neumorphic-ui";
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
    <NeuCard width="100%" height="12vh">
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
    </NeuCard>
  );
}

export default Navbar;

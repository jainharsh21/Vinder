import React, { useState } from "react";
import { NeuCard } from "neumorphic-ui";
import { Menu, IconButton, Typography } from "@material-ui/core";

import { ExitToApp, MenuSharp } from "@material-ui/icons";
import { yellow } from "@material-ui/core/colors";

const styles = {
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

function Navbar() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(true);
  };
  const mouseOver = () => {
    setClicked(!clicked);
    setHovered(true);
  };
  const mouseOut = () => {
    setHovered(false);
  };
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

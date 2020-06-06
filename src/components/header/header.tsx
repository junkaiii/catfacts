import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Cat Fun Facts</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

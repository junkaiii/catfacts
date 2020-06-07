import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import PetsIcon from "@material-ui/icons/Pets";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  headerPaw: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <Typography className={classes.headerPaw}>Cat Fun Facts</Typography>
        <PetsIcon fontSize="small"></PetsIcon>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

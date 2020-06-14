import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

interface Props {
  setDoRefreshState: (value: boolean) => void;
}

const useStyles = makeStyles(() => ({
  headerPaw: {
    flex: 1,
  },
  refreshButton: {
    alignItems: "center",
  },
}));

const Header = (props: Props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.refreshButton}>
      <Toolbar>
        <Button
          variant="contained"
          onClick={() => props.setDoRefreshState(true)}
        >
          Get Facts!
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

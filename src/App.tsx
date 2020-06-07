import React from "react";
import { Grid, CssBaseline, useScrollTrigger } from "@material-ui/core";
import Header from "./components/header/header";
import Cards from "./components/cards/cards";

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Grid container direction="column">
        <CssBaseline />
        <ElevationScroll>
          <Header></Header>
        </ElevationScroll>
        <Grid item container>
          <Grid xs={undefined} item sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <Cards></Cards>
          </Grid>
          <Grid xs={undefined} item sm={2}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

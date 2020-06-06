import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Grid container direction="column">
        <Grid item>
          <Header></Header>
        </Grid>
        <Grid item container>
          <Grid xs={undefined} item sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            This is where the content will be This is where the content will be
            This is where the content will be This is where the content will be
            This is where the content will be This is where the content will be
            This is where the content will be
          </Grid>
          <Grid xs={undefined} item sm={2}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

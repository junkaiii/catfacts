import React, { Component } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CardComponent from "../card/card";
import axios from "axios";

interface Props {}

interface State {
  cards: Card[];
  loading: boolean;
}

interface Card {
  source: string;
  upvotes: number;
  userUpvoted: boolean;
  text: string;
}

function fetchFacts() {
  let facts = axios.get("https://cat-fact.herokuapp.com/facts");
  return facts;
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a: Card[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const styles = () => ({
  loader: {
    display: "block",
    margin: "auto",
  },
});

class Cards extends Component<Props, State> {
  state: Readonly<State> = {
    cards: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      let response = await fetchFacts();
      let factArray = response.data.all.map(
        (fact: {
          upvotes: number;
          userUpvoted: boolean;
          text: string;
          user: { name: { first: string; last: string } };
        }) => {
          return {
            upvotes: fact.upvotes,
            userUpvoted: fact.userUpvoted,
            text: fact.text,
            source: fact.user
              ? `${fact.user.name.first} ${fact.user.name.last}`
              : "Nobody",
          };
        }
      );
      this.setState({ cards: shuffle(factArray).slice(0, 5), loading: false });
    } catch (e) {
      console.log(e.message);
    }
  }

  renderLoading = () => {
    return (
      <Grid
        container
        style={{ minHeight: "100vh" }}
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <CircularProgress />
      </Grid>
    );
  };

  render() {
    if (this.state.loading) {
      return this.renderLoading();
    } else {
      return (
        <Grid
          container
          style={{ minHeight: "100vh" }}
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid container spacing={2}>
            {this.state.cards.map((card, index) => {
              return (
                <Grid item xs={12} sm={4} key={index}>
                  <CardComponent
                    index={index + 1}
                    source={card.source}
                    upvotes={card.upvotes}
                    userUpvoted={card.userUpvoted}
                    text={card.text}
                  ></CardComponent>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      );
    }
  }
}

export default withStyles(styles)(Cards);

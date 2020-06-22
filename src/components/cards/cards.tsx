import React, { Component } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CardComponent from "../card/card";
import FactsService from "../../services/FactsService";

export type Props = {
  doRefreshState: boolean;
  setDoRefreshState: (value: boolean) => void;
};

export type State = {
  cards: CardType[];
  loading: boolean;
};

export type CardType = {
  source: string;
  upvotes: number;
  userUpvoted: boolean;
  text: string;
};

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a: CardType[]) {
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

export class Cards extends Component<Props, State> {
  state: Readonly<State> = {
    cards: [],
    loading: true,
  };

  async componentDidMount() {
    const facts = await FactsService.fetchFacts();
    this.setState({ cards: shuffle(facts).slice(0, 5), loading: false });
  }

  async componentDidUpdate(prevState: Props) {
    if (
      this.props.doRefreshState !== prevState.doRefreshState &&
      this.props.doRefreshState === true
    ) {
      this.setState({ loading: true });
      const facts = await FactsService.fetchFacts();
      this.setState({ cards: shuffle(facts).slice(0, 5), loading: false });
      this.props.setDoRefreshState(false);
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

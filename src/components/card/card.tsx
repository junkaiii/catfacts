import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  Divider,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Dotdotdot from "react-dotdotdot";

export type Props = {
  index: number;
  source: string;
  upvotes: number;
  userUpvoted: boolean;
  text: string;
};

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardHeight: {
    maxHeight: 300,
  },
});

const Cards = (props: Props) => {
  const classes = useStyles();
  let favouriteIconColor: "primary" | "secondary";
  if (props.userUpvoted) {
    favouriteIconColor = "secondary";
  } else {
    favouriteIconColor = "primary";
  }
  return (
    <Card elevation={4} className={classes.cardHeight}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {`Cat Fact #${props.index}`}
        </Typography>
        <Divider />
        <br />
        <Typography className={classes.pos} color="textSecondary">
          {`${props.source} says:`}
        </Typography>
        {/* TODO: Improve text truncation. Current implementation is inefficient. */}
        <Dotdotdot clamp={4}>
          <Typography
            variant="body2"
            component="p"
            // className={classes.truncateCard}
          >
            {props.text}
          </Typography>
        </Dotdotdot>
      </CardContent>
      <CardActions>
        <IconButton size="small">
          <FavoriteIcon color={favouriteIconColor}></FavoriteIcon>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Cards;

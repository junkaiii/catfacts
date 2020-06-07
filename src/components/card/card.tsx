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

interface Props {
  index: number;
  source: string;
  upvotes: number;
  userUpvoted: boolean;
  text: string;
}

interface Props {
  index: number;
  source: string;
  upvotes: number;
  userUpvoted: boolean;
  text: string;
}

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
    <Card elevation={3}>
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
        <Typography variant="body2" component="p">
          {props.text}
        </Typography>
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

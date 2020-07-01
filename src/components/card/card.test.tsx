import React from "react";
import { shallow } from "enzyme";
import Card, { Props } from "./card";
import { Typography } from "@material-ui/core";

const props = (override?: Partial<Props>): Props => ({
  index: 1,
  source: "Someone",
  upvotes: 10,
  userUpvoted: true,
  text: "Cats are smart",
  ...override,
});

describe("Card Modal", () => {
  const element = shallow(<Card {...props()}></Card>);
  it("renders successully", () => {
    expect(element.find(Typography).at(0).text()).toEqual("Cat Fact #1");
    expect(element.find(Typography).at(1).text()).toEqual("Someone says:");
    expect(element.find(Typography).at(2).text()).toEqual("Cats are smart");
    expect(element.find(Typography)).toHaveLength(3);
  });
});

import React from "react";
import { shallow } from "enzyme";
import { CardType, Cards, Props } from "./cards";
import { CircularProgress } from "@material-ui/core";
import CardComponent from "../card/card";

const props = (override?: Partial<Props>): Props => ({
  doRefreshState: false,
  setDoRefreshState: (value: boolean) => {},
  ...override,
});

const mockGetFacts: CardType[] = [
  {
    upvotes: 10,
    userUpvoted: false,
    text: "Cats are cool",
    source: "Meow Person",
  },
  {
    upvotes: 10,
    userUpvoted: false,
    text: "Cats are not cool",
    source: "Woof Person",
  },
  {
    upvotes: 10,
    userUpvoted: false,
    text: "Cats are not cool",
    source: "Woof Person",
  },
  {
    upvotes: 10,
    userUpvoted: false,
    text: "Cats are not cool",
    source: "Woof Person",
  },
  {
    upvotes: 10,
    userUpvoted: false,
    text: "Cats are not cool",
    source: "Woof Person",
  },
];

jest.mock("../../services/FactsService", () => ({
  fetchFacts: () => mockGetFacts,
}));

describe("<Cards />", () => {
  describe("loading", () => {
    it("shows the loader on component mount", async () => {
      const wrapper = shallow(<Cards {...props()}></Cards>);
      expect(wrapper.find(CircularProgress)).toHaveLength(1);
      expect(wrapper.state("loading")).toBe(true);
    });
  });

  describe("loaded", () => {
    it("should render <CardComponent /> successfully", async () => {
      let wrapper = await shallow(<Cards {...props()}></Cards>);
      expect(wrapper.find(CardComponent)).toHaveLength(5);
      expect(wrapper.find(CardComponent).at(0).prop).toBeDefined();
      console.log(wrapper.find(CardComponent).at(0).props());
      // expect(wrapper.find(CardComponent).at(0).prop).toEqual(
      //   expect.arrayContaining(mockGetFacts)
      // );
      expect(wrapper.state("loading")).toBe(false);
    });

    it("ensures facts are randomized", async () => {
      let wrapper = await shallow(<Cards {...props()}></Cards>);
      expect(wrapper.state("cards")).not.toBe(mockGetFacts);
      expect(wrapper.state("cards").length).toBe(mockGetFacts.length);
    });
  });
});

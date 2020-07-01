import axios from "axios";

export default class FactsService {
  static async fetchFacts() {
    try {
      let response = await axios.get("https://cat-fact.herokuapp.com/facts");
      return response.data.all.map(
        (fact: {
          upvotes: number;
          userUpvoted: boolean;
          text: string;
          user: { name: { first: string; last: string } };
        }) => ({
          upvotes: fact.upvotes,
          userUpvoted: fact.userUpvoted,
          text: fact.text,
          source: fact.user
            ? `${fact.user.name.first} ${fact.user.name.last}`
            : "Nobody",
        })
      );
    } catch (e) {
      console.log(e.message);
      return [];
    }
  }
}

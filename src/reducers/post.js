import { ADDED_POST, ADDED_COMMENT, RATED_POST } from "../types";
import comments from "./comments";
import { v4 } from "uuid";

export default function post(state = {}, action = {}) {
  switch (action.type) {
    case ADDED_POST:
      return {
        id: v4(),
        text: action.text,
        rating: 0,
        comments: []
      };
    case RATED_POST:
      return {
        ...state,
        rating: action.rating
      };
    case ADDED_COMMENT:
      return {
        ...state,
        comments: comments(state.comments, action)
      };
    default:
      return state;
  }
}

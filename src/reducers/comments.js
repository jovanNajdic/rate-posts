import { ADDED_COMMENT } from "../types";
import comment from "./comment";

export default function comments(state = [], action = {}) {
  switch (action.type) {
    case ADDED_COMMENT:
      return [...state, comment(undefined, action)];
    default:
      return state;
  }
}

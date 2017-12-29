import { ADDED_POST, ADDED_COMMENT, RATED_POST } from "../types.js";
import post from "./post";

export default function posts(state = [], action = {}) {
  switch (action.type) {
    case ADDED_POST:
      return [...state, post(undefined, action)];
    case RATED_POST:
      return state.map(p => (p.id === action.id ? post(p, action) : p));
    case ADDED_COMMENT:
      return state.map(p => (p.id === action.id ? post(p, action) : p));
    default:
      return state;
  }
}

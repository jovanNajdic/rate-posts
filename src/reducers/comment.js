import { ADDED_COMMENT } from "../types";
import { v4 } from "uuid";

const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();

export default function comment(state = {}, action = {}) {
  switch (action.type) {
    case ADDED_COMMENT:
      return {
        id: v4(),
        text: action.comment,
        time: `${month} / ${year}`
      };
    default:
      return state;
  }
}

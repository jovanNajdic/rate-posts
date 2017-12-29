import { combineReducers } from "redux";
import posts from "./reducers/posts";
import stars from "./reducers/stars";

export default combineReducers({
  posts,
  stars
});

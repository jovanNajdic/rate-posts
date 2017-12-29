import { ADDED_POST, RATED_POST, ADDED_COMMENT } from "../types";

export const addedPost = text => ({
  type: ADDED_POST,
  text
});

export const ratedPost = (id, rating) => ({
  type: RATED_POST,
  id,
  rating
});

export const addedComment = (id, comment) => ({
  type: ADDED_COMMENT,
  id,
  comment
});

export const addPost = ({ text }) => dispatch => dispatch(addedPost(text));

export const ratePost = (id, rating) => dispatch => dispatch(ratedPost(id, rating));

export const commentPost = (id, comment) => dispatch => dispatch(addedComment(id, comment));

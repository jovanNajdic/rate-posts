import React from "react";
import Comment from "../parts/Comment";

const Comments = ({ comments }) => (
  <div className="comments">
    <h3>{comments.length > 0 ? "Comments" : "Be the first one"}</h3>
    {comments.map(comment => <Comment comment={comment} key={comment.id} />)}
  </div>
);

export default Comments;

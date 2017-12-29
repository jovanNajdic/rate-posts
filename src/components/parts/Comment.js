import React from "react";

const Comment = ({ comment }) => (
  <div className="comment">
    <div className="comment__body row row--space-between">
      <div className="comment__body__text">{comment.text}</div>

      <div className="comment__body__timestamp">{comment.time}</div>
    </div>
  </div>
);

export default Comment;

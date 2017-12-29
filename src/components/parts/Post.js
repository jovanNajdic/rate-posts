import React from "react";
import Rating from "./Rating";
import ToggleForm from "../forms/ToggleForm";
import Comments from "../lists/Comments";

const Post = ({ post, rateIt, commentIt }) => (
  <div className="row row--justify-center">
    <div className="post post--border">
      <div className="post__body">
        <div className="post__body__content">{post.text}</div>
        <div className="row">
          <Rating rating={post.rating} rateIt={rateIt} />
        </div>
      </div>
      <Comments comments={post.comments} />
      <ToggleForm commentIt={commentIt} />
    </div>
  </div>
);

export default Post;

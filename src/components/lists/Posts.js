import React, { Component } from "react";
import { connect } from "react-redux";
import { ratePost, commentPost } from "../../actions/post";
import Post from "../parts/Post";

class Posts extends Component {
  render() {
    const { posts, ratePost, commentPost } = this.props;
    return (
      <div className="post__list">
        <div className="container">
          <h1>Posts</h1>
          {posts.map(post => (
            <Post
              key={post.id}
              post={post}
              rateIt={num => ratePost(post.id, num)}
              commentIt={comment => commentPost(post.id, comment)}
            />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { ratePost, commentPost })(Posts);

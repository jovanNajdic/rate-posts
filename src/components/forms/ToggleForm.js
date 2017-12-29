import React, { Component } from "react";
import CommentForm from "./CommentForm";

class ToggleForm extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  submit = data => this.props.commentIt(data);

  render() {
    const { open } = this.state;
    return (
      <div>
        {open ? (
          <CommentForm onSubmit={this.submit} close={this.handleToggle} />
        ) : (
          <button onClick={this.handleToggle} className="form__submit form__submit--toggle">
            Add comment...
          </button>
        )}
      </div>
    );
  }
}

export default ToggleForm;

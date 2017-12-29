import React, { Component } from "react";

class CommentForm extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        comment: ""
      },
      errors: {}
    };
  }

  onChange = e =>
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      errors: {}
    });

  onFormSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);

    if (Object.keys(errors).length === 0) {
      this.props.onSubmit(this.state.data.comment);
      this.props.close();
      this.setState({
        ...this.state,
        data: {
          comment: ""
        }
      });
    } else {
      this.setState({ errors });
    }
  };

  validate = data => {
    const errors = {};

    if (!data.comment) {
      errors.blank = "Cant be blank";
    }

    return errors;
  };

  render() {
    const { comment } = this.state.data;

    return (
      <form onSubmit={this.onFormSubmit} className="form">
        <div className="form__group">
          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            id="comment"
            name="comment"
            value={comment}
            onChange={this.onChange}
            placeholder="Comment ..."
            className={
              !!this.state.errors.blank ? "form__input form__input--invalid" : "form__input"
            }
          />
        </div>
        <button
          onClick={this.onFormSubmit}
          className={
            !!this.state.errors.blank ? "form__submit form__submit--disabled" : "form__submit"
          }
        >
          Post comment
        </button>
      </form>
    );
  }
}

export default CommentForm;

import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        text: ""
      },
      errors: {}
    };
  }

  onChange = e => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      errors: {}
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);

    if (Object.keys(errors).length === 0) {
      this.props.addPost(this.state.data);
      this.setState({
        ...this.state,
        data: {
          text: ""
        }
      });
    } else {
      this.setState({ errors });
    }
  };

  validate = data => {
    const errors = {};

    if (!data.text) {
      errors.blank = "Cant be blank";
    }

    return errors;
  };

  render() {
    const { text } = this.state.data;
    const { blank } = this.state.errors;
    return (
      <form onSubmit={this.onFormSubmit} className="form form--post">
        <div className="form__group">
          <label htmlFor="text">Post something...</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder={!!blank ? "Cant be blank" : "Text goes here"}
            value={text}
            onChange={this.onChange}
            className={!!blank ? "form__input form__input--invalid" : "form__input"}
          />
        </div>
        <button
          onClick={this.onFormSubmit}
          className={!!blank ? "form__submit form__submit--disabled" : "form__submit"}
        >
          Publish!
        </button>
      </form>
    );
  }
}

export default connect(null, { addPost })(Form);

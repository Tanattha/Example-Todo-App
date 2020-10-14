import React, { Component } from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const initialState = {
  task: "",
  date: "",
};
export default class TodoInput extends Component {
  state = { initialState };

  handleonChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = () => {
    this.props.createTask(this.state.task, this.state.date);
    this.setState(initialState);
  };

  render() {
    return (
      <div className="todo-from">
        <form onSubmit={this.onSubmit}>
          <ul className="form-container">
            <input
              className="form-input"
              name="date"
              type="date"
              placeholder="Due Date"
              onChange={this.handleonChange}
              required="true"
            />
            <p className="todo-text">Due Date</p>
            <input
              className="form-input"
              name="task"
              type="text"
              placeholder="type here..."
              onChange={this.handleonChange}
              required="true"
            />
            &nbsp;&nbsp;
            <button className="TodoBtn" type="submit" onSubmit={this.onSubmit}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </ul>
        </form>
      </div>
    );
  }
}

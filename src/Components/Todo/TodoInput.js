import React, { Component } from "react";
import "./Todo.css";
//import DatePicker from "react-datepicker";

export default class TodoInput extends Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  render() {
    return (
      <div className="todo-from">
        <form onSubmit={this.onSubmit.bind(this)}>
          <ul className="form-container">
            <input
              className="form-input"
              name="deadline"
              type="date"
              placeholder="Due Date"
              ref="taskDuedate"
              onChange={this.handleChange}
              selected={this.state.startDate}
            />

            <p className="todo-text">Due Date</p>

            <input
              type="text"
              placeholder="type here..."
              ref="taskMessage"
              className="form-input"
              autoFocus
            />

            <button className="TodoBtn">Add</button>
          </ul>
        </form>
      </div>
    );
  }
  onSubmit(e) {
    this.props.createTask(
      this.refs.taskMessage.value,
      this.refs.taskDuedate.value
    );
    this.refs.taskMessage.value = "";
    this.refs.taskDuedate.value = "";
    e.preventDefault();
  }
}

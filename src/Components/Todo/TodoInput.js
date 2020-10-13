import React, { Component } from "react";
import "./Todo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

export default class TodoInput extends Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  onSubmit = (e) => {
    this.props.createTask(
      this.refs.taskMessage.value,
      this.refs.taskDuedate.value
    );
    this.refs.taskMessage.value = "";
    this.refs.taskDuedate.value = "";
    e.preventDefault();
  }

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
              ref="taskDuedate"
              onChange={this.handleChange}
              required="true"
            />

            <p className="todo-text">Due Date</p>

            <input
              name="task"
              type="text"
              placeholder="type here..."
              ref="taskMessage"
              className="form-input"
              autoFocus
              required="true"
            />
            &nbsp;&nbsp;
            <span className="TodoBtn" onClick={this.onSubmit}>
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </ul>
        </form>
      </div>
    );
  }

}
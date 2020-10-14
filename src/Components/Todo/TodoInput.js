import React, { Component } from "react";
import "./Todo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

export default class TodoInput extends Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (e) => {
    this.setState({
      startDate: e.target.value,
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
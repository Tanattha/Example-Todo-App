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
              required="true"
            />

            <p className="todo-text">Due Date</p>

            <input
              type="text"
              placeholder="type here..."
              ref="taskMessage"
              className="form-input"
              autoFocus
              required="true"
            />
            &nbsp;&nbsp;
            <span className="TodoBtn" onClick={this.onSubmit.bind(this)}>
              <FontAwesomeIcon icon={faPlus} />
            </span>
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

import React, { Component } from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faEdit,
  faTrash,
  faWindowClose,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isDone: false,
    };
  }
  /* Actions */
  toggleTask() {
    this.props.toggleTask(this.props.id);
  }

  setDoneState(isDone) {
    this.setState({
      isDone: isDone,
    });
  }

  setEditState(isEditing) {
    this.setState({
      isEditing,
    });
  }

  editTask(e) {
    this.props.editTask(
      this.props.id,
      this.refs.task.value,
      this.refs.date.value
    );
    this.setState({
      isEditing: false,
    });
    e.preventDefault();
  }

  deleteTask() {
    this.props.deleteTask(this.props.id);
  }

  /* Options Menu */
  renderOptions() {
    if (this.state.isEditing) {
      return (
        <td>
            <span className="TodoBtn" onClick={(e) => this.editTask(e)}>
          <FontAwesomeIcon icon={faSave} />
        </span>
        &nbsp;&nbsp;
        <span className="TodoBtn" onClick={() => this.setEditState(true)}>
          <FontAwesomeIcon icon={faWindowClose} />
        </span>
        </td>
      );
    }
    return (
      <td>
        <span className="TodoBtn" onClick={() => this.setDoneState(true)}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
        &nbsp;&nbsp;
        <span className="TodoBtn" onClick={() => this.setEditState(true)}>
          <FontAwesomeIcon icon={faEdit} />
        </span>
        &nbsp;&nbsp;
        <span className="TodoBtn" onClick={() => this.deleteTask()}>
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </td>
    );
  }

  /* Main Task */
  renderTask() {
    const { task, date } = this.props;

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.editTask.bind(this)}>
            <input
              ref="date"
              defaultValue={date}
              className="form-input2"
              type="date"
              autoFocus
            />

            <input
              ref="task"
              defaultValue={task}
              className="form-input2"
              autoFocus
            />
          </form>
        </td>
      );
    }
    if (this.state.isDone) {
      return (
        <div>
          <li
            style={{
              textDecoration: "line-through",
              textDecorationColor: "red",
            }}
          >
            {task}
          </li>
        </div>
      );
    }
    return (
      <div className="task-container" onClick={this.toggleTask}>
        Due Date: {date} &nbsp;|&nbsp; {task} &nbsp;&nbsp;
      </div>
    );
  }

  /*Combined Renders */
  render() {
    return (
      <tr>
        {this.renderTask()}
        {this.renderOptions()}
      </tr>
    );
  }
}

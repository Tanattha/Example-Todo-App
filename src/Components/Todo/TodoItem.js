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
    };
  }
  /* Actions */
  toggleTask = (id) => {
    this.props.toggleTask(id);
  }

  doneTask = (id) => {
    this.props.doneTask(id);
  }

  setEditState = (isEditing) => {
    this.setState({
      isEditing,
    });
  }

  editTask = (e) => {
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

  deleteTask = (id) => {
    this.props.deleteTask(id);
  }

  /* isEditing Menu */
  renderisEditing() {
    if (this.state.isEditing) {
      return (
        <td>
          <span className="TodoBtn" onClick={(e) => this.editTask(e)}>
            <FontAwesomeIcon icon={faSave} />
          </span>
          &nbsp;&nbsp;
          <span className="TodoBtn" onClick={() => this.setEditState(false)}>
            <FontAwesomeIcon icon={faWindowClose} />
          </span>
        </td>
      );
    }
    return (
      <td>
        &nbsp;&nbsp;
        <span className="TodoBtn" onClick={() => this.setEditState(true)}>
          <FontAwesomeIcon icon={faEdit} />
        </span>
        &nbsp;&nbsp;
        <span
          className="TodoBtn"
          onClick={() => this.deleteTask(this.props.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </td>
    );
  }

  /* isCompleted Menu */
  renderisCompleted() {
    if (this.props.isCompleted === true) {
      return (
        <td>
          <span
            className="TodoBtn"
            onClick={() => this.doneTask(this.props.id)}
          >
            <FontAwesomeIcon icon={faWindowClose} />
          </span>
          &nbsp;&nbsp;
        </td>
      );
    }

    return (
      <td>
        <span className="TodoBtn" onClick={() => this.doneTask(this.props.id)}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
        &nbsp;&nbsp;
      </td>
    );
  }

  /* Main Task */
  renderTask() {
    const { task, date } = this.props;
    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={(e) => this.editTask(e)}>
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
    if (this.props.isCompleted === true) {
      return (
        <div className="task-container">
          <li
            style={{
              textDecoration: "line-through",
              textDecorationColor: "red",
            }}
          >
            Due Date: {date} &nbsp;|&nbsp; {task} &nbsp;&nbsp;
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
        {this.renderisCompleted()}
        {this.renderTask()}
        {this.renderisEditing()}
      </tr>
    );
  }
}

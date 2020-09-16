import React, { Component } from "react";
import "./Todo.css";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isDone: false,
    };
  }

  renderActionSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button className="TodoBtn" onClick={this.editTask.bind(this)}>
            Save
          </button>
          <button
            className="TodoBtn"
            onClick={this.setEditState.bind(this, false)}
          >
            Cancel
          </button>
        </td>
      );
    }
    return (
      <td>
        <button
          className="TodoBtn"
          onClick={this.setDoneState.bind(this, true)}
        >
          Done
        </button>
        <button
          className="TodoBtn"
          onClick={this.setEditState.bind(this, true)}
        >
          Edit
        </button>
        <button className="TodoBtn" onClick={this.deleteTask.bind(this)}>
          Delete
        </button>
      </td>
    );
  }

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
      <div className="task-container" onClick={this.toggleTask.bind(this)}>
        Due Date: {date} &nbsp;|&nbsp; Task : {task}
        &nbsp;&nbsp;
      </div>
    );
  }

  render() {
    return (
      <tr>
        {this.renderTask()}
        {this.renderActionSection()}
      </tr>
    );
  }

  setEditState(isEditing) {
    this.setState({
      isEditing,
    });
  }

  setDoneState(isDone) {
    this.setState({
      isDone,
    });
  }

  toggleTask() {
    this.props.toggleTask(this.props.id);
  }

  doneTask() {
    this.props.doneTask(this.props.id);
    this.setState({
      isDone: false,
    });
  }

  editTask(e) {
    this.props.editTask(this.props.id, this.refs.task.value, this.refs.date.value);
    this.setState({
      isEditing: false,
    });
    e.preventDefault();
  }

  deleteTask() {
    this.props.deleteTask(this.props.id);
  }
}

import React, { Component } from "react";
import "./Todo.css";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  /* Show List */
  renderItems() {

    return this.props.todos.map((previousTask, index) => {
      return (
        <TodoItem
          key={index}
          {...previousTask}
          id={index}
          toggleTask={this.props.toggleTask}
          doneTask={this.props.doneTask}
          editTask={this.props.editTask}
          deleteTask={this.props.deleteTask}
        />
      );
    });
  }
  render() {
    return (
      <div className="container">
        <div className="todoList">
          <ul>
            <li> {this.renderItems()} </li>
          </ul>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./Todo.css";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  renderItems() {
    return this.props.todos.map((c, index) => {
      return (
        <TodoItem
          key={index}
          {...c}
          id={index}
          doneTask={this.props.doneTask}
          toggleTask={this.props.toggleTask}
          editTask={this.props.editTask}
          deleteTask={this.props.deleteTask}
        />
      );
    });
  }
  render() {
    return (
      <div className="container">
        <ul >
          <li className="todoList">{this.renderItems()}</li>
        </ul>
      </div>
    );
  }
}

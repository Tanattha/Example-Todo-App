import React, { Component } from "react";
import "./Home.css";
import TodoInput from "../Todo/TodoInput";
import TodoList from "../Todo/TodoList";

const todos = {
  items: [],
  lsKey: "todos",

  loadTask() {
    this.items = JSON.parse(localStorage.getItem(this.lsKey)) || [];
  },

  save() {
    localStorage.setItem(this.lsKey, JSON.stringify(this.items));
  },

  toggle(id) {
    let todoItem = this.items[id];
    todoItem.isCompleted = !todoItem.isCompleted;
    this.save();
  },

  add(obj) {
    this.items.push(obj);
    this.save();
  },

  remove(id) {
    this.items.splice(id, 1);
    this.save();
  },

  update(id, task, date) {
    let todoItem = this.items[id];
    todoItem.task = task;
    todoItem.date = date;
    this.save();
  },

  done(id) {
    let todoItem = this.items[id];
    todoItem.isCompleted = !todoItem.isCompleted;
    this.save();
  },
};

todos.loadTask();

export default class Home extends Component {
  state = {
    todos: todos.items,
  };
  /* States Change */
  createTask(task, date) {
    todos.add({
      task,
      date,
      isCompleted: false,
    });
    this.setState({ todos: todos.items });
  }

  toggleTask(taskId) {
    todos.toggle(taskId);
    this.setState({ todos: todos.items });
  }

  editTask(taskId, task, date) {
    todos.update(taskId, task, date);
    this.setState({ todos: todos.items });
  }

  deleteTask(taskId) {
    todos.remove(taskId);
    this.setState({ todos: todos.items });
  }

  doneTask(taskId, date) {
    todos.done(taskId);
    this.setState({ todos: todos.items });
  }

  /* Main Page */
  render() {
    return (
      <header className="home">
        <div className="container header">
          <h1>Example Todo App</h1>
          <TodoInput createTask={(task, date) => this.createTask(task, date)} />

          <TodoList
            todos={this.state.todos}
            toggleTask={(taskId) => this.toggleTask(taskId)}
            editTask={(taskId, task, date) => this.editTask(taskId, task, date)}
            deleteTask={(taskId) => this.deleteTask(taskId)}
            doneTask={(taskId) => this.doneTask(taskId)}
          />
        </div>
      </header>
    );
  }
}

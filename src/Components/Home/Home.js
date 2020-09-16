import React, { Component } from "react";
import "./Home.css";
import TodoInput from "../Todo/TodoInput";
import TodoList from "../Todo/TodoList";

const todos = {
  items: [],
  lsKey: "todos",
  populate() {
    this.items = this.get();
  },
  get() {
    try {
      return JSON.parse(localStorage.getItem(this.lsKey)) || [];
    } catch (e) {}
    return [];
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
};

todos.populate();

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos.items,
    };
  }
  render() {
    return (
        <header className="home">
        <div className="container header">
        <h1>Example Todo App</h1>
        <TodoInput createTask={this.createTask.bind(this)} />
        
        
        <TodoList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          editTask={this.editTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />


      </div>
      </header>
    );
  }

  createTask(task,date ) {
    task = task.trim();
    if (!task) {
      return;
    }
    todos.add({
      task,
      date,
      isCompleted: false,
    });
    this.setState({ todos: this.state.todos });
  }

  toggleTask(taskId) {
    todos.toggle(taskId);
    this.setState({ todos: this.state.todos });
  }
  editTask(taskId, task, date) {
    todos.update(taskId, task, date);
    console.log(task)
    console.log(date)
    this.setState({ todos: this.state.todos });
  }
  deleteTask(taskId) {
    todos.remove(taskId);
    this.setState({ todos: this.state.todos });
  }
}

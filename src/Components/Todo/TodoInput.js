import React, {Component} from "react";
import "./Todo.css";
export default class TodoInput extends Component {
    render () {
        return (
            <div className="todo-from" >
                <form onSubmit={this.onSubmit.bind(this)}>
                <ul className="form-container">
                <input type="text" placeholder="type here..." ref="taskMessage" className="form-input" autoFocus />
                <button className="TodoBtn">
                  Add
                </button>
                </ul>
                
            </form>
            </div>
        );
    }
    onSubmit (e) {
        this.props.createTask(this.refs.taskMessage.value);
        this.refs.taskMessage.value = "";
        e.preventDefault();
    }
}
import React, { Component } from 'react';
import styles from './addtodo.module.css';

export default class AddTodo extends Component {

    constructor() {
        super();
        this.state = {
            todoValue: ''
        }
    }

    /**
     * Update the state with new todo title from input field
     * @param {keyboard event} event 
     */
    handleOnChange = (event) => {
        this.setState({ todoValue: event.target.value });
    }

    /**
     * Passing added todo titile to parent component
     * Reset the input field state
     */
    handleOnClick = () => {
        this.props.onFieldUpdate(this.state.todoValue);
        this.setState({ todoValue: '' })
    }

    render() {
        return (
            <div className={styles.card}>
                <input type="text" placeholder='Add Todo...' className={styles.text_field} value={this.state.todoValue} onChange={this.handleOnChange} />
                <button className={styles.button} onClick={this.handleOnClick} disabled={this.state.todoValue ? false : true}>Add To List</button>
            </div>
        )
    }
}

import './App.css';
import React, { Component } from 'react';
import { TodoList } from './Components/TodoList/TodoList';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import AddTodo from './Components/AddTodo/AddTodo';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      todoList: []
    }
  }

  /**
   * Adding new todo list to the todo array
   */
  onFieldValueChange = (todoTitle) => {
    const newTodo = {
      id: this.randomIdGenerator(),
      title: todoTitle,
      isCompleted: false
    }
    this.setState(prevTodoList => ({ todoList: [...prevTodoList.todoList, newTodo] }));
  }

  /**
   * Generate unique id for todo list
   * @returns unique id with letters and number
   */
  randomIdGenerator = () => {
    return '_todoId_' + Math.random().toString(36).slice(2);
  }

  /**
   * Update the status of todo list
   * @param { selected todo list id } id 
   */
  toggleTodoStatus = (id) => {
    let [currentTodoList, index] = this.getSlectedIndex(id);
    currentTodoList[index].isCompleted = !currentTodoList[index].isCompleted;
    this.setState({ todoList: currentTodoList })
  }

  /**
   * 
   * @param { selected todo list id } id 
   */
  onDeleteTodo = (id) => {
    let [currentTodoList, index] = this.getSlectedIndex(id);
    currentTodoList.splice(index, 1);
    this.setState({ todoList: currentTodoList })
  }

  /**
   * Update todolist of a selected id
   * @param { selected id } id
   * @param { updated title } title
   */
  onUpdateTodoHandler = ({ id, title }) => {
    let [currentTodoList, index] = this.getSlectedIndex(id);
    currentTodoList[index].title = title;
    this.setState({ todoList: currentTodoList })
  }

  /**
   * generate index of selected toto and return todolist
   * @param { selected id } id 
   * @returns 
   */
  getSlectedIndex = (id) => {
    const currentTodoList = this.state.todoList;
    const selectedTodo = currentTodoList.findIndex(todo => todo.id === id);
    return [currentTodoList, selectedTodo]
  }

  render() {
    return (
      <>
        <Header />
        <Container >
          <AddTodo onFieldUpdate={this.onFieldValueChange} />
          <TodoList isHeader={true} />
          {this.state.todoList.map((todo) => (<TodoList onUpdateTodo={this.onUpdateTodoHandler} toggleTodoStatus={this.toggleTodoStatus} key={todo.id} todoId={todo.id} onDeleteTodo={this.onDeleteTodo} isHeader={false} title={todo.title} status={todo.isCompleted}></TodoList>))}
        </Container>
      </>
    )
  }
}



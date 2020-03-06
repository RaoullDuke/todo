import React from 'react';
import './App.css';
import ToDoItem from './ToDoItem';
import todosData from './todosData';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(item => {
          if (item.id === id) {
            item.completed = !item.completed;
          }
          return item
        })
        } 
    })
  }

  render() {
    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}

export default App;

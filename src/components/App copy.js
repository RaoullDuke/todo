import React from 'react';
import './App.css';
import ToDoItem from './ToDoItem';
import todosData from './todosData';

function App() {
  const todosComponents = todosData.map(item => <ToDoItem key={item.key} item={item}/>)
  return (
    <div className="todo-list">
      {todosComponents}
    </div>
  );
}

export default App;

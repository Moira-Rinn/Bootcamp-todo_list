import './App.css';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoDisplay from './components/TodoDisplay';

function App() {

  const [ttd, setTtd] = useState([]);

  const moreTodo = (newTodo) => {
    setTtd(arr => [...arr, newTodo]);
  }

  const completed = id => {
    setTtd(
      ttd.map(item => {
        if (item.id === id) {
          return { ...item, complete: !item.complete }
        } else {
          return item;
        }
      })
    );
  };

  const removed = id => {
    setTtd(ttd.filter(item => item.id !== id));
  }

  return (
    <div className="App">
      <h1>Always Something ToDo...</h1>
      <div className='Container'>
        <header className="App-header">
          <TodoDisplay todo={ttd} finished={completed} deleted={removed} />
          <TodoForm onNewTodo={moreTodo} />
        </header>
      </div>
    </div>
  );
}

export default App;

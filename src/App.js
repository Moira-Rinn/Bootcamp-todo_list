import './App.css';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoDisplay from './components/TodoDisplay';


function App() {

  const [ttd, setTtd] = useState([]);

  const moreTodo = (newTodo) => {
    setTtd(arr => [...arr, newTodo]);

  }
  return (
    <div className="App">
      <h1>Always Something ToDo...</h1>
      <div className='Container'>
        <header className="App-header">
          <TodoDisplay todo={ttd} />
          <TodoForm onNewTodo={moreTodo} />
        </header>
      </div>
    </div>
  );
}

export default App;

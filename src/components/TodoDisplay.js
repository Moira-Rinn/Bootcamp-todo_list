import React, { useState } from 'react';

const TodoDisplay = (props) => {

  const { todo } = props;
  const [todoLst, setTodoLst] = useState(todo);
  const [deleted, setDeleted] = useState({});

  const completed = id => {
    console.log(id);
    console.log(todoLst);
    setTodoLst(
      todo.map(item => {
        if (item.id === id) {
          return { ...item, complete: !item.complete };
        } else {
          return item;
        }
      })
    );
    todoLst.map(item => { item.complete ? console.log("yes", item.ttd) : console.log("no", item.ttd) })
  };

  const removed = (e) => {
    setDeleted(todo.splice(e.target.value, 1));
  }

  return (
    <div className='userData'>
      {console.log("something:", todo)}
      <h2>Things To Do: </h2>
      <ul>
        {
          todo.map((item, index) =>
            <li key={index}>
              <input type='checkbox' onChange={() => completed(item.id)} /> {item.ttd}
              <button
                className='btn btn-sm btn-light btn-outline-dark'
                value={index}
                onClick={removed}>Delete
              </button>
            </li>
          )
        }
      </ul>
    </div>
  );
}
export default TodoDisplay;
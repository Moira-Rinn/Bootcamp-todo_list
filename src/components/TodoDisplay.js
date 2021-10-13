import React from 'react';

const TodoDisplay = (props) => {

  const { todo, finished, deleted } = props;

  return (
    <div className='display'>
      <h2>Things To Do: </h2>
      <ul>
        {
          todo.map((item, index) =>
            <li key={index} style={item.complete ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
              <input type='checkbox' checked={item.complete} onChange={() => finished(item.id)} />  {item.complete ? "Completed" : item.ttd}
              <button
                className='btn btn-sm btn-light btn-outline-dark'
                value={index}
                onClick={() => deleted(item.id)}>Done?
              </button>
            </li>
          )
        }
      </ul>
    </div>
  );
}
export default TodoDisplay;
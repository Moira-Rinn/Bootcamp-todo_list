import React, { useState } from 'react';
import SMCR from '../imgs/SMCR.png';

const TodoForm = (props) => {
  const [cnt, setCnt] = useState(1);
  const [thingTodo, setThingTodo] = useState({ id: cnt, ttd: "", complete: false });

  const handleChange = (e) => {
    setThingTodo({ ...thingTodo, id: cnt, ttd: e.target.value })
  }

  const justAnotherThing = (e) => {
    e.preventDefault();
    setCnt(cnt + 1)
    //experimenting with persisting to localStorage... 
    localStorage.setItem(thingTodo.id, JSON.stringify(thingTodo));
    props.onNewTodo(JSON.parse(localStorage.getItem(thingTodo.id)));
    setThingTodo({ ...thingTodo, ttd: "" });
  };

  return (
    <div className="todoForm">
      <div className='form-wrapper'>
        <form onSubmit={justAnotherThing}>

          <div className='form-group'>
            <label htmlFor='fname-input'>Needs to be done: </label>
            <textarea className='form-control-sm' type="text" onChange={handleChange} value={thingTodo.ttd}>
            </textarea>
          </div>

          <input
            id='submitBtn'
            className='btn btn-light btn-outline-dark'
            type="submit"
            value="Add to the list"
          />

        </form>
      </div>
      <img src={SMCR} alt="S.M.C.R. Logo"></img>
    </div>
  );
}
export default TodoForm;
import React from 'react';
import { TodoItems } from "./TodoItems";
import '../App.css'; 

export const Todos = (props) => {
  return (
    <div className='container align-items-center Larger shadow Todo'>
       <center><h3 className='py-1 TitleFont'>TASK's</h3></center>
      <div className='todo-container my-3 rounded-4' style={{ padding: '10px' }}>
        {props.todos.length === 0 ? (
          <div className="text-center my-4"> {/* Centered and added margin */}
            <h5>No Todos to display</h5>
          </div>
        ) : (
          props.todos.map((todo) => (
            <div className='text-white text-center rounded-3 todo-item my-2' key={todo.sno}>
              {/* Adding space between each item with my-2 (Bootstrap margin utility) */}
              <TodoItems todo={todo} onDelete={props.onDelete} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

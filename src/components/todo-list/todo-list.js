import React from 'react'

import TodoListitem from '../todo-list-item';
import './todo-list.css'

const TodoList = (props) => {

  const { todos, onDeleted, onToggleImportant, onToggleDone} = props;
  const elements = todos.map((item)=>{

    const{id, ...itemProps} = item;

    return(
        <li key={id} className="list-group-item">
            <TodoListitem 
            {...itemProps}
            onDeleted={() => onDeleted(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleDone={() => onToggleDone(id)}
            />
        </li>
      );
  });

  return (
    <div>
        <ul className="list-group todo-list">
          {elements}
        </ul>
    </div>
  )
};

export default  TodoList;
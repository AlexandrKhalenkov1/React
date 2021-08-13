/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import ToDo from './ToDo';

const TodosList = memo(({ lists, handleToggle, removeTask }) => (
  <div className="newTodoWrapper">
    {
          lists.map((todo) => (
            <ToDo
              todo={todo}
              key={todo.id}
              toggleTask={handleToggle}
              removeTask={removeTask}
            />
          ))
        }
  </div>
));
export default TodosList;

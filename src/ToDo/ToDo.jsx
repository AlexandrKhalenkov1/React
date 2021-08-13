/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import cn from 'classnames';

const ToDo = ({ todo, toggleTask, removeTask }) => {
  const toggle = useCallback(() => {
    toggleTask(todo.id);
  }, [toggleTask, todo.id]);

  const deleteTask = useCallback(() => {
    removeTask(todo.id);
  }, [removeTask, todo.id]);

  return (
    <div className={cn('newTodo', { done: todo })}>
      <div className="checkAndItem" onClick={toggle}>

        <i className={cn('fa fa-check', { 'done-but-for-checkbox': todo.complete })} aria-hidden="true" />

        <div className={cn('item', { 'done-item': todo.complete })}>
          {todo.task}
        </div>
      </div>
      <div className="itemDelete" onClick={deleteTask}>
        <i className="fa fa-trash" aria-hidden="false" />
      </div>
    </div>
  );
};
export default ToDo;

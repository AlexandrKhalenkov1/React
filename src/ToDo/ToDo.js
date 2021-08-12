import React, { useCallback } from 'react'

function ToDo ({todo, toggleTask, removeTask}){

    const toggle = useCallback(() => {
        toggleTask(todo.id)
    }, [toggleTask, todo.id]);

    const deleteTask = useCallback(() => {
        removeTask(todo.id)
    }, [removeTask, todo.id]);

    return (
        <div className={todo.complete ? 'newTodo done': 'newTodo'} >
            <div className='checkAndItem' onClick={toggle}> 
                <i className={todo.complete ? 'fa fa-check done-but-for-checkbox': 'fa fa-check'} aria-hidden="true"></i>
                <div className={todo.complete ? 'item done-item': 'item'}>
                    {todo.task}
                </div>
                </div> 
            <div className='itemDelete' onClick={deleteTask}>
                <i className="fa fa-trash" aria-hidden="false"></i>
            </div>
        </div>
    )
}
export default ToDo
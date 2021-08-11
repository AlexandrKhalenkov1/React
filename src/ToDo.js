import React from 'react'

function ToDo ({todo, toggleTask, removeTask}){

    const toggle = () => {
        toggleTask(todo.id)
    }

    return (
        <div className={todo.complete ? 'newTodo done': 'newTodo'} >
            <div className='checkAndItem' onClick={toggle}> 

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={todo.complete ? 'bi-check-lg-done': 'bi-check-lg'}
                     viewBox="0 0 16 16">
                <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
                </svg> 

                <div className={todo.complete ? 'item done': 'item'}>
                    {todo.task}
                </div>
                </div> 
            <div className='itemDelete' onClick={()=>removeTask(todo.id)}>

                <svg className = 'trashCan' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>

            </div>
        </div>
    )
}

export default ToDo
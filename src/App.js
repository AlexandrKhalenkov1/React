import React, { useState, useEffect } from 'react'
import './App.css'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import TodoFooter from './TodoFooter'

const TodosList = ({lists, handleToggle, removeTask}) => {
  return (
    <div className='newTodoWrapper'>
      {
        lists.map((todo) => {
          return (
            <ToDo
              todo={todo}
              key={todo.id}
              toggleTask={handleToggle}
              removeTask={removeTask}
            />
          )
        })
      }
    </div>
  )
}

const App = () => {

  const [todos, setTodos] = useState([])  //для туду элемента
  const [lists, setLists] = useState([])
  const [countTodos, setCountTodos] = useState(0)
  const [statusButton, setStatusButton] = useState('All');

  const countActiveTodos = () => {
    const arr = todos.filter((todo) => !todo.complete)
    setCountTodos(arr.length)
  }

  useEffect(() => {
    console.log('123123123');
    const localTodos = JSON.parse(localStorage.getItem('todos'));
    setTodos(localTodos);
    setLists(localTodos);

  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    setLists(todos);
    countActiveTodos();
    whichPageChosed();
  }, [todos])

  useEffect(() => {
    whichPageChosed();
  }, [statusButton])


  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }


  const removeTask = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }

  const handleToggle = (id) => {
    const checkedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      }
      return todo;
    });
    setTodos(checkedTodo);
  }


  const whichPageChosed = () => {
    let filterTodo;
    switch (statusButton) {
      case 'Todo':
        filterTodo = todos.filter(item => item.complete === false);
        break;
      case 'Completed':
        filterTodo = todos.filter(item => item.complete !== false);
        break;
      case 'All':
      default:
        filterTodo = todos;
        break;
    }
    setLists(filterTodo);
  }

  const chooseAllTodos = () => {
    const checkAll = todos.map((todo) => {
      todo.complete = true;
      return todo;
    })
    setTodos(checkAll)
  }

  const clearAllDone = () => {
    const clearTodos = todos.filter((todo) => !todo.complete)
    setTodos(clearTodos);
  }

  return (
    <div className='wrapper'>
      <header>
        <div className='title'>Your todo list </div>
      </header>

      <div className='content'>

        <ToDoForm addTask={addTask} />

        <TodosList
          lists={lists}
          handleToggle={handleToggle}
          removeTask={removeTask} 
        />

        <TodoFooter
          todo={!!todos.length}
          chooseAllTodos={chooseAllTodos}
          clearAllDone={clearAllDone}
          countTodos={countTodos}
          setStatusButton={setStatusButton}
          statusButton={statusButton}
        />
      </div>
    </div>
  );
}

export default App;
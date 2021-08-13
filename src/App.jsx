/* eslint-disable no-param-reassign */
import React, {
  useState, useEffect, useMemo, useCallback
} from 'react';
import './App.css';
import ToDoForm from './ToDo/ToDoForm';
import TodoFooter from './ToDo/TodoFooter';
import Header from './ToDo/Header';
import TodosList from './ToDo/TodosList';
import RegLogMain from './Login/RegLogMain';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [statusButton, setStatusButton] = useState('All');

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos'));
    setTodos(localTodos || []);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const lists = useMemo(() => {
    let filterTodo;
    switch (statusButton) {
      case 'Todo':
        filterTodo = todos.filter((item) => item.complete === false);
        break;
      case 'Completed':
        filterTodo = todos.filter((item) => item.complete !== false);
        break;
      case 'All':
      default:
        filterTodo = todos;
        break;
    }
    return filterTodo;
  }, [todos, statusButton]);

  const activeTodos = useMemo(() => todos.filter((todo) => !todo.complete).length, [todos]);

  const unActiveTodos = useMemo(() => todos.length - activeTodos, [todos.length, activeTodos]);

  const addTask = useCallback((userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      };
      setTodos((prevTodos) => [...prevTodos, newItem]);
    }
  }, []);

  const removeTask = useCallback(
    (id) => {
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      setTodos(filteredTodos);
    },
    [todos, setTodos]
  );

  const handleToggle = useCallback(
    (id) => {
      const checkedTodo = todos.map((todo) => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
        }
        return todo;
      });
      setTodos(checkedTodo);
    },
    [todos, setTodos],
  );

  const chooseAllTodos = () => {
    const checkAll = todos.map((todo) => {
      todo.complete = true;
      return todo;
    });
    setTodos(checkAll);
  };

  const clearAllDone = () => {
    const clearTodos = todos.filter((todo) => !todo.complete);
    setTodos(clearTodos);
  };

  return (
    <div className="wrapper">
      <div className="todoListWrapper">
        <Header title="Your todo list " />
        <div className="content">
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
            activeTodos={activeTodos}
            unActiveTodos={unActiveTodos}
            setStatusButton={setStatusButton}
            statusButton={statusButton}
            todos={todos}
          />
        </div>
      </div>
      <div className="Register-Login-component">
        <RegLogMain />
      </div>
    </div>
  );
};

export default App;

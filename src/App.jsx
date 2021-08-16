/* eslint-disable no-param-reassign */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import ToDoApp from './ToDo/ToDoApp';
import RegLogMain from './Login/RegLogMain';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/ToDoApp">TodoApp</Link>
            </li>
            <li>
              <Link to="/RegLogMain">RegLOgMain</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/ToDoApp">
            <ToDoApp />
          </Route>
          <Route path="/RegLogMain" component={RegLogMain} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;

/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react';
// import cn from 'classnames';
// import Button from '../Button';
import Buttons from './Buttons';

const TodoFooter = ({
  chooseAllTodos, clearAllDone, todo, activeTodos, setStatusButton,
  statusButton, todos, unActiveTodos
}) => {
  const [chooseAllDisabled, setChooseAllDisabled] = useState(true);
  const [clearAllDisabled, setClearAllDisabled] = useState(false);
  const [able, setAble] = useState('markAllTodos able');
  const [clearVisible, setclearVisible] = useState('btnsInFooter__clear');
  const changeButtonStatus = (e) => {
    setStatusButton(e.target.innerText.trim());
  };

  const buttons = useMemo(() => [{
    text: 'All',
    onClick: changeButtonStatus,
    active: statusButton === 'All',
    id: 1
  }, {
    text: 'Todo',
    onClick: changeButtonStatus,
    active: statusButton === 'Todo',
    id: 2
  }, {
    text: 'Completed',
    onClick: changeButtonStatus,
    active: statusButton === 'Completed',
    id: 3
  }], [changeButtonStatus, statusButton]);

  useMemo(() => {
    if (unActiveTodos) {
      setClearAllDisabled(false);
      setclearVisible('btnsInFooter__clear visible');
    } else {
      setClearAllDisabled(true);
      setclearVisible('btnsInFooter__clear invisible');
    }
  }, [todos, unActiveTodos, statusButton]);

  useMemo(() => {
    if (activeTodos) {
      setChooseAllDisabled(false);
      setAble('markAllTodos able');
    } else {
      setChooseAllDisabled(true);
      setAble('markAllTodos disable');
    }
  }, [todos, activeTodos, statusButton]);

  return (
    <div className="todoFooterWrapper">
      {todo
        ? (
          <div className="todoFooter">
            <button type="button" disabled={chooseAllDisabled} className={able} onClick={chooseAllTodos}>
              {activeTodos}
              {' '}
              tasks left
            </button>
            <div className="buttonGroup">
              <Buttons
                buttons={buttons}
                changeButtonStatus={changeButtonStatus}
                statusButton={changeButtonStatus}
              />
            </div>
            <button type="button" disabled={clearAllDisabled} onClick={clearAllDone} className={clearVisible}>Clear Completed</button>
          </div>
        )
        : null}
    </div>
  );
};

export default TodoFooter;

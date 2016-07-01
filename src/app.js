import React from 'react';
import { render } from 'react-dom';
import { TodoList } from './components';

// const dummyTodos = [
//   { id: 0, isDone: true,  text: 'make components' },
//   { id: 1, isDone: false, text: 'design actions' },
//   { id: 2, isDone: false, text: 'implement reducer' },
//   { id: 3, isDone: false, text: 'connect components' }
// ];

// render(
//   <TodoList todos={dummyTodos} />,
//   document.getElementById('app')
// );

import { List, Map } from 'immutable';

const dummyTodos = List([
  Map({ id: 0, isDone: true,  text: 'make components' }),
  Map({ id: 1, isDone: false, text: 'design actions' }),
  Map({ id: 2, isDone: false, text: 'implement reducer' }),
  Map({ id: 3, isDone: false, text: 'connect components' })
]);

const store = createStore(reducer);

render(
  <TodoList todos={store.getState()} />,
  document.getElementById('app')
);

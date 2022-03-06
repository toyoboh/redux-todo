import React from 'react';
import './App.css';
import Input from './components/Input'
import TodoItem from './components/TodoItem'

const todoList = [{
    item: 'todo',
    done: false,
    id: 695426487923
}, {
    item: 'todo2',
    done: false,
    id: 69523
}]

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {
            todoList.map(item => (
              <TodoItem
                name={ item.item }
                done={ item.done }
                id={ item.id }
              />
            ))
          }
        </div>
      </div>
      <Input />
    </div>
  );
}

export default App;

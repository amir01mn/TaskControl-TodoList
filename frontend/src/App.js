import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

import TodoList from './components/TodoList';

function App() {

  const[todos, setTodo] = useState([])

    useEffect(() => {

    }, [])


  return (
    <div className="App">
      <div className='app-container'>
        <h1 className='title'>Todo App</h1>
        <TodoList />

      </div>
      

    </div>
  );
}

export default App;

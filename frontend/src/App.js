import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

import {get_todos} from './api/endpoints'; 

import TodoList from './components/TodoList';

function App() {

  const[todos, setTodos] = useState([])

    useEffect(() => {
      const fetchTodos = async () => {
        const todos = await get_todos();
        setTodos(todos);
        console.log(todos)
      }
      fetchTodos();
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

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import ThemeToggle from './components/ThemeToggle';
import { get_todos, create_todo, delete_todo } from './api/endpoints';
import './App.css';

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await get_todos();
      setTodos(todos);
    };
    if (token) {
      fetchTodos();
    }
  }, [token]);

  const addTodo = async (todo_name) => {
    const todo = await create_todo(todo_name);
    setTodos([todo, ...todos]);
  };

  const deleteTodo = async (id) => {
    await delete_todo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <ThemeToggle />
      <div className="app-container">
        <h1 className="title">Todo App</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <TodoApp />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

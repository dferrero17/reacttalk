import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  // State
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Side Effects / Lifecycle
  useEffect(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);

  // Events
  function addTodo(event) {
    event.preventDefault();
    const next = [...todos, inputValue];
    setTodos(next);
    setInputValue('');
    localStorage.setItem('todos', JSON.stringify(next));
  }

  function clearTodos() {
    setTodos([]);
    localStorage.removeItem('todos');
  }

  function clearTodo(index) {
    const next = [...todos];
    next.splice(index, 1);
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
  }

  return (
    <div>
      <div className="mb-20 text-9xl">AETUDU</div>
      <TodoList todos={todos} clearTodo={clearTodo} />
      <TodoForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTodo={addTodo}
        clearTodos={clearTodos}
      />
    </div>
  );
}

export default App;

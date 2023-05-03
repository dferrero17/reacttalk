import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // State
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  // Lifecycle
  useEffect(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : [])
  }, []);

  // Events 
  function addTodo(event) {
    event.preventDefault()
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
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => clearTodo(index)}>Done</button>
          </li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        <button type="submit">Add Todo</button>
        <button type="button" onClick={clearTodos}>Clear Todos</button>
      </form>
    </div>

  )
}

export default App

import React from 'react';
import TodoCard from './TodoCard';

function TodoList({ todos, clearTodo }) {
  return (
    <div className="grid grid-cols-4 gap-24">
      {todos.map((todo, index) => (
        <TodoCard key={index} todo={todo} onDone={() => clearTodo(index)} />
      ))}
    </div>
  );
}

export default TodoList;


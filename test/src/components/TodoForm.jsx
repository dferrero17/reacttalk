import React from 'react';

function TodoForm({ inputValue, setInputValue, addTodo, clearTodos }) {
  return (
    <form onSubmit={addTodo}>
      <input
        className='p-2 rounded-lg'
        type="text"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <input
        type="submit"
        value="Add Todo"
        className="px-4 py-2 mt-4 ml-2 text-white bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600"
      />
      <input
        type="button"
        value="Clear Todos"
        onClick={() => {
          clearTodos();
        }}
        className="px-4 py-2 mt-4 ml-2 text-white bg-red-500 rounded-lg cursor-pointer hover:bg-red-600"
      />
    </form>
  );
}

export default TodoForm;




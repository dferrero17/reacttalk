import React from 'react';

function TodoCard({ todo, onDone }) {
  return (
    <div className="card w-80 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{todo}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={onDone}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;

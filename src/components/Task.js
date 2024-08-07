import React from 'react';

const Task = ({ task, onEdit, onDelete }) => {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="button-group">

      <button onClick={() => onEdit(task.id)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
    </div>
  );
};

export default Task;

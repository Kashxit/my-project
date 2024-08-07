import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, task }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({
        id: task ? task.id : Date.now(),
        title,
        description,
      });
      setTitle('');
      setDescription('');
    } else {
      console.error('onSubmit function is not defined');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>{task ? 'Edit Task' : 'Add Task'}</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          required
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          required
        />
      </label>
      <br />
      <button type="submit">{task ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;

import React, { useState, useEffect } from 'react';

const IssueForm = ({ issue, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (issue) {
      setTitle(issue.title);
      setDescription(issue.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [issue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({
        id: issue ? issue.id : Date.now(),
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
    <form onSubmit={handleSubmit} className="issue-form">
      <h2>{issue ? 'Edit Issue' : 'Add Issue'}</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter issue title"
          required
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter issue description"
          required
        ></textarea>
      </label>
      <br />
      <button type="submit">{issue ? 'Update Issue' : 'Add Issue'}</button>
    </form>
  );
};

export default IssueForm;

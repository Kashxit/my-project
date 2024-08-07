import React from 'react';

const IssueList = ({ issues = [], onEdit, onDelete }) => {
  return (
    <div className="issue-list">
      <h2>Issue List</h2>
      {issues.length === 0 ? (
        <p>No issues found.</p>
      ) : (
        <ul>
          {issues.map(issue => (
            <li key={issue.id}>
              <h3>{issue.title}</h3>
              <p>{issue.description}</p>
              <div className="button-group">
              <button onClick={() => onEdit(issue)}>Edit</button> 
              <button onClick={() => onDelete(issue.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IssueList;

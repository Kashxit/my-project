import React, { useState } from 'react';
import Board from './pages/Board';
import Header from './components/Header';

const App = () => {
  const [issues, setIssues] = useState([]);
  const [issueToEdit, setIssueToEdit] = useState(null);

  const handleAddOrUpdateIssue = (issue) => {
    if (issueToEdit) {
      setIssues(issues.map(i => i.id === issue.id ? issue : i));
      setIssueToEdit(null);
    } else {
      setIssues([...issues, issue]);
    }
  };

  const handleDeleteIssue = (id) => {
    setIssues(issues.filter(issue => issue.id !== id));
  };

  const handleEditIssue = (issue) => {
    setIssueToEdit(issue);
  };

  return (
    <div>
      <Header />
      <Board
        issues={issues}
        onAddOrUpdateIssue={handleAddOrUpdateIssue}
        onDeleteIssue={handleDeleteIssue}
        onEditIssue={handleEditIssue}
        issueToEdit={issueToEdit}
      />
    </div>
  );
};

export default App;

import React from 'react';

const Sidebar = ({ onSelect, selected }) => {
  return (
    <div className="sidebar">
      <button
        onClick={() => onSelect('tasks')}
        className={selected === 'tasks' ? 'active' : ''}
      >
        Tasks
      </button>
      <button
        onClick={() => onSelect('issues')}
        className={selected === 'issues' ? 'active' : ''}
      >
        Issues
      </button>
    </div>
  );
};

export default Sidebar;

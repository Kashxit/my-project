import React, { useState } from 'react';
import Task from '../components/Task';
import TaskForm from '../components/TaskForm';
import IssueForm from '../components/IssueForm';
import IssueList from '../components/IssueList';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile'; 

const Board = () => {
  const [tasks, setTasks] = useState([]);
  const [issues, setIssues] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [editingIssue, setEditingIssue] = useState(null);
  const [selected, setSelected] = useState('tasks');

  const handleAddTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setEditingTask(null);
  };

  const handleDeleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const handleAddIssue = (issue) => {
    setIssues(prevIssues => [...prevIssues, issue]);
  };

  const handleUpdateIssue = (updatedIssue) => {
    setIssues(prevIssues => prevIssues.map(issue => issue.id === updatedIssue.id ? updatedIssue : issue));
    setEditingIssue(null);
  };

  const handleDeleteIssue = (id) => {
    setIssues(prevIssues => prevIssues.filter(issue => issue.id !== id));
  };

  const renderContent = () => {
    if (selected === 'tasks') {
      return (
        <div>
          <TaskForm onSubmit={editingTask ? handleUpdateTask : handleAddTask} task={editingTask} />
          <div className="tasks">
            {tasks.map(task => (
              <Task
                key={task.id}
                task={task}
                onEdit={() => setEditingTask(task)}
                onDelete={() => handleDeleteTask(task.id)}
              />
            ))}
          </div>
        </div>
      );
    } else if (selected === 'issues') {
      return (
        <div>
          <IssueForm onSubmit={editingIssue ? handleUpdateIssue : handleAddIssue} issue={editingIssue} />
          <IssueList
            issues={issues}
            onEdit={(issue) => setEditingIssue(issue)}
            onDelete={(id) => handleDeleteIssue(id)}
          />
        </div>
      );
    }
  };

  const profile = {
    name: 'Prakash Kumar' 
  };

  return (
    <div className="board-container">
      <Sidebar onSelect={setSelected} selected={selected} />
      <div className="board-content">
        <Profile profile={profile} /> 
        {renderContent()}
      </div>
    </div>
  );
};

export default Board;

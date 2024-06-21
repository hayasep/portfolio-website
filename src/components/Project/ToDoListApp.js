// src/components/Project/ToDoListApp.js
import React from 'react';
import './Project.css';

const ToDoListApp = () => {
  return (
    <div className="project animate__animated animate__slideInUp animate__delay-4s">
      <h2>To-Do List Application</h2>
      <p>
        This is a To-Do List application developed using React and Node.js. It allows users to manage their tasks efficiently with features such as adding, editing, and deleting tasks. Key features include:
      </p>
      <ul>
        <li>Add, edit, and delete tasks</li>
        <li>Mark tasks as complete or incomplete</li>
        <li>Filter tasks by status (all, active, completed)</li>
        <li>Responsive design for different screen sizes</li>
      </ul>
      <p>Technologies Used:</p>
      <ul>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
      </ul>
      <a href="https://github.com/hayasep/to_do_list_app" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      <div className="project-image">
        <img src={`${process.env.PUBLIC_URL}/to-do-list-app-screenshot.png`} alt="To-Do List Application Screenshot" />
      </div>
    </div>
  );
};

export default ToDoListApp;

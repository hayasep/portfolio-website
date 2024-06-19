// src/components/Project/WorkerBreakout.js
import React from 'react';
import './Project.css';

const WorkerBreakout = () => {
  return (
    <div className="project">
      <h2>Worker Breakout Application</h2>
      <p>
        This is a Flask application designed to manage worker assignments across various sections in a retail environment. The application allows for adding, editing, and deleting workers, calculating worker distribution based on workload, and visualizing the distribution with a bar graph. Key features include:
      </p>
      <ul>
        <li>Add, edit, and delete worker profiles</li>
        <li>Calculate worker distribution based on workload percentages</li>
        <li>Display worker assignments in a tabular format</li>
        <li>Visualize workload distribution using a bar graph</li>
      </ul>
      <p>Technologies Used:</p>
      <ul>
        <li>Python</li>
        <li>Flask</li>
        <li>Jinja2</li>
        <li>Pandas</li>
        <li>JavaScript (Chart.js)</li>
        <li>HTML/CSS (Bootstrap)</li>
        <li>Heroku (Deployment)</li>
      </ul>
      <a href="https://github.com/hayasep/worker_breakout_app" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      <div className="project-image">
        <img src={`${process.env.PUBLIC_URL}/worker-breakout-screenshot.png`} alt="Worker Breakout App Screenshot" />
      </div>
    </div>
  );
};

export default WorkerBreakout;

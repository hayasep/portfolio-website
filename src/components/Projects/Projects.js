// src/components/Projects/Projects.js
import React from 'react';
import './Projects.css';
import SpaceGame from '../Project/SpaceGame';
import WorkerBreakout from '../Project/WorkerBreakout';
import WeatherDashboard from '../Project/WeatherDashboard';
import ToDoListApp from '../Project/ToDoListApp';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <SpaceGame />
        <WorkerBreakout />
        <WeatherDashboard />
        <ToDoListApp />
        {/* Add other project components here */}
      </div>
    </section>
  );
};

export default Projects;

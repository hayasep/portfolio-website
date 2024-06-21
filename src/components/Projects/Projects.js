// src/components/Projects/Projects.js
import React from 'react';
import './Projects.css';
import SpaceGame from '../Project/SpaceGame';
import WorkerBreakout from '../Project/WorkerBreakout';
import WeatherDashboard from '../Project/WeatherDashboard';
import ToDoListApp from '../Project/ToDoListApp';

const Projects = () => {
  return (
    <section id="projects" className="projects container animate__animated animate__slideInRight">
      <h2 className="text-center my-4">Projects</h2>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <SpaceGame />
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <WorkerBreakout />
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <WeatherDashboard />
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <ToDoListApp />
        </div>
      </div>
    </section>
  );
};

export default Projects;

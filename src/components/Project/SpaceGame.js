// src/components/Project/SpaceGame.js
import React from 'react';
import './Project.css';

const SpaceGame = () => {
  return (
    <div className="project animate__animated animate__slideInUp animate__delay-1s">
      <h2>2D Space Game</h2>
      <p>
        This is a 2D space shooter game developed using JavaScript and Phaser.js. The game features smooth and responsive player controls, a dynamic scoring system, multiplayer, and various power-ups. Key features include:
      </p>
      <ul>
        <li>Smooth and responsive player controls</li>
        <li>Enemies with varying behaviors and patterns</li>
        <li>Multiplayer</li>
        <li>Accurate collision detection</li>
        <li>Various power-ups that enhance player abilities</li>
        <li>Dynamic scoring system</li>
        <li>Engaging sound effects and background music</li>
        <li>Smooth animations and visually appealing graphics</li>
      </ul>
      <a href="https://github.com/hayasep/2DSpaceGame" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      <div className="project-image">
        <img src={`${process.env.PUBLIC_URL}/space-game-screenshot.png`} alt="2D Space Game Screenshot" />
      </div>
    </div>
  );
};

export default SpaceGame;

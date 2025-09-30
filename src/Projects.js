import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import minesweeper from './Minesweeper.png';
import avlTree from './AVL TREE pic.png';
import a11Yum from './a11Yum pic.png';
import Buildings from './Buildings.jpg';
function Projects() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Projects</h1>
      </header>
      
      <main className="projects-grid">
        <Link to="https://github.com/kevnster/a11Yum" className="project-card">
          <div className="project-image-box">
            <img
              src={a11Yum}
              alt="Accessiblity Cooking App"
              className="project-img-scaled"
            />
          </div>
          <div className="project-text">
            <h3>Accessiblity Cooking App</h3>
            <p>Click to view GitHub repository and details</p>
          </div>
        </Link>

        <Link to="https://github.com/bhajann/COP3530-Sp25-P3-Commercial-Building-Search-Tool" className="project-card">
          <div className="project-image-box">
            <img
              src={Buildings}
              alt="Commercial Search Building Tool"
              className="project-img"
            />
          </div>
          <div className="project-text">
            <h3>Commercial Search Building Tool</h3>
            <p>Click to view GitHub repository and details</p>
          </div>
        </Link>

        <Link to="https://github.com/JTCRicardo/minesweeper" className="project-card">
          <div className="project-image-box">
            <img
              src={minesweeper}
              alt="Minesweeper"
              className="project-img"
            />
          </div>
          <div className="project-text">
            <h3>Minesweeper</h3>
            <p>Click to view GitHub repository and details</p>
          </div>
        </Link>

        <Link to="https://github.com/JTCRicardo/AVL" className="project-card">
          <div className="project-image-box">
            <img
              src={avlTree}
              alt="AVL Tree"
              className="project-img"
            />
          </div>
          <div className="project-text">
            <h3>AVL Tree</h3>
            <p>Click to view GitHub repository and details</p>
          </div>
        </Link>
      </main>
      
      <div className="navigation-links">
        <Link to="/" className="nav-link">← Back to Home</Link>
        <Link to="/connect" className="nav-link">Connect →</Link>
        <Link to="/involvement" className="nav-link">Involvement →</Link>
      </div>
    </div>
  );
}

export default Projects;

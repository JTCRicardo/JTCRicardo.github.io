import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import headshots from "./Headshots.JPEG";
import Projects from "./Projects";
import Connect from "./Connect";
import Involvement from "./Involvement";
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ricardo Santos</h1>
      </header>
      <img
        src={headshots}
        alt="Ricardo Santos"
        className="profile-picture"
      />

      <main className="App-main">
        <Link to="/projects" className="card">
          {/* <img
            src="https://via.placeholder.com/400x200"
            alt="Projects"
            className="card-img"
          /> */}
          <h2>Projects</h2>
        </Link>

        <Link to="/connect" className="card">
          {/* <img
            src="https://via.placeholder.com/400x200"
            alt="Connect"
            className="card-img"
          /> */}
          <h2>Connect</h2>
        </Link>

        <Link to="/involvement" className="card">
          {/* <img
            src="https://via.placeholder.com/400x200"
            alt="Involvement"
            className="card-img"
          /> */}
          <h2>Involvement</h2>
        </Link>
      </main>
      
      <div className="text-box-container">
        <div className="custom-text-box">
          Hello and welcome to my website. I'm a Computer Science student at the University of Florida with a strong background in Python and C++ as well as interests in multiple aspects of Computer Science such as Software Engineering and Cybersecurity. Everything you see me do is dedicated to lifting up a better community for engineers. I love working with people and I want everyone to become the best engineer they can be. To learn more about me look through some of the links on my website.
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/involvement" element={<Involvement />} />
      </Routes>
    </Router>
  );
}

export default App;

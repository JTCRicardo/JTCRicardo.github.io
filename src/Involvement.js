import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Involvement() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Involvement</h1>
      </header>
      
      <main className="connect-content">
        <div className="connect-text-box">
          <p>
            I've stayed involved in the UF campus throughout my time here.
            <br /><br />
            NSBE:
            <br />
            2024-2025: Served as the Webmaster for the UF Chapter.
            <br />
            It was an honor to be a greater aid to an org that gives so much for its 
            members and uplift my fellow engineers around.
            <br /><br />
            Colorstack:
            <br />
            I stay involved with colorstack. Constantly attending their events to further my
            professional career while also having made some great friends there.
            <br /><br />
            BONUS:
            <br />
            Gator Gaming:
            <br />
            I'm decently involved in the fighting game community at UF/Gainesville.
            <br />
            I love video games and although sometimes I cannot have too much time for them. I still enjoy
            competing in tournaments just for the sake of it.
          </p>
        </div>
        
        <div className="navigation-links">
          <Link to="/" className="nav-link">← Back to Home</Link>
          <Link to="/projects" className="nav-link">Projects →</Link>
          <Link to="/connect" className="nav-link">Connect →</Link>
        </div>
      </main>
    </div>
  );
}

export default Involvement;

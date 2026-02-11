import React from "react"

import "./App.css";

function App() {
  return (
    <div className="resume">
      
      <header className="header">
        <h1>Ahir Sujal</h1>
        <p>Frontend Developer (React JS)</p>
      </header>

      <section className="section">
        <h2>Contact</h2>
        <p>Email: sujal@gmail.com</p>
        <p>Phone: 9876543210</p>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React JS</li>
        </ul>
      </section>

      <section className="section">
        <h2>Education</h2>
        <p>BCA - XYZ College</p>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <p>✔ Resume Builder App</p>
        <p>✔ Photo Gallery App</p>
      </section>

    </div>
  );
}

export default App;
App()
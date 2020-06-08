import React from "react";
import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App" style={{ textAlign: "center", margin: 20 }}>
      <div class="split right">
        <div class="centered">
          <a
            className="App-logo"
            href="https://github.com/open-mindd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </div>
      </div>

      <div class="split left">
        <div class="centered">
          <h1 style={{ color: "green" }}>Welcome to OSC (Open-Mindd)</h1>
          <h2>
            Open-Mindd{" "}
            <span role="img" aria-label="heart" style={{ color: "red" }}>
              ❤️
            </span>{" "}
            OPEN SOURCE, We{" "}
            <span role="img" aria-label="heart" style={{ color: "red" }}>
              ❤️
            </span>{" "}
            all kind of open source projects
            <br />
            <br />
            Choose your Role be a Author, Owner, Maintainer, Contributor,
            Community Member etc.
            <br />
            <br />
            Having trouble with Your Projects ? Get help on your projects Ask &
            Be the part of the community.
          </h2>
          <br />

          <h2>Contact:</h2>
          <span style={{ color: "cyan", fontSize: "30px" }}>
            {" "}
            help@openmindd.tech{"  "}
            <br />
            <a href="https://github.com/open-mindd"> Github </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;

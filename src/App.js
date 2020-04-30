import React from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className='App'>
      <h1>Welcome to OSC (Open-Mindd)</h1>
      <h2>
        <pre>
          We{' '}
          <span role='img' aria-label='heart'>
            ❤️
          </span>
          open source projects <br></br>
          <h3>
            Having trouble with Your Minor Projects ? <br></br>Ask and Be the
            community members and get your things done
          </h3>
        </pre>
      </h2>
      <br></br>
      <br></br>
      <br></br>
      <a
        className='App-logo'
        href='https://github.com/open-mindd'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={logo} className='App-logo' alt='logo' />
      </a>
    </div>
  );
}

export default App;

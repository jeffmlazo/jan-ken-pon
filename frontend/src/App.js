import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost/api/echo')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error('There was an error fetching the message!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> andssave to reload.
        </p>
      </header>
      <div>
        <h1>{message}</h1>
      </div>
    </div>
  );
}

export default App;

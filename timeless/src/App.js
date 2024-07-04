import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/greeting')
      .then(response => {
        setGreeting(response.data.greeting);
      })
      .catch(error => {
        console.error("There was an error fetching the greeting!", error);
      });
  }, []);

  return (
<div className="App">
  <header className="App-header">
  <h2>Dive into</h2>

    <div class="content">
      <div class="header-text">

        <h1>TIMELESS ELEGANCE</h1>
      </div>

      <div class="image-section">
        <img src="/test2.jpg" alt="My Image" />
      </div>

      <div class="text-overlay">
        <h1>{greeting}</h1>
        <h1>{greeting}</h1>
        <h1>{greeting}</h1>
      </div>

      <div class="icon-section" onClick={() => alert('Hello! Have a nice day!')}>
        <img src="/test.jpeg" alt="Icon Image" />
        <div class="icon-text">
          <p>ダイナミックな挨拶</p>
          <p>Welcome to my dynamic greeting webpage!</p>
        </div>

        <div class="footer">© 2024 LU ZHANG</div>
        
      </div>
    </div>

  </header>
</div>
  );
}

export default App;

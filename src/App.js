import React from 'react';
import './App.scss';

import Clock from './components/Clock/Clock';
import StartStop from './components/Buttons/StartStop'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Giggedy</h1>
       <button className="btn">Well, Alright</button>
       <Clock />
       <StartStop />
      </header>
    </div>
  );
}

export default App;

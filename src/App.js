import React from 'react';
import './App.scss';

import Clock from './components/Clock/Clock';
import StartStop from './components/Buttons/StartStop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <Header/> 
     
       
       <button className="btn">Well, Alright</button>
       <Clock />
       <StartStop />
     <Footer />
    </div>
  );
}

export default App;

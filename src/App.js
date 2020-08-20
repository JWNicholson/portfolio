import React from 'react';
import './App.scss';

import Clock from './components/Clock/Clock';
import StartStop from './components/Buttons/StartStop';
import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';

function App() {
 

  return (
    <>
    <Header />
  
    <div className="App">
     <main className="main-cntr">
     <button className="btn">Well, Alright</button>
       <Clock />
       <StartStop />
     </main>
       
    
       <Footer />
    </div>
    </>
  );
}

export default App;

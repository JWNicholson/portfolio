import React from 'react';
import './App.scss';


import StartStop from './components/Buttons/StartStop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './Pages/homePage';

function App() {
 
  return (
    <>
     <div className="App">
    
    <main className="main-cntr">
    <Header />
   <HomePage />
    
     
      
       <StartStop />
    
       
       </main>
       <Footer />
    </div>
   
    </>
  );
}

export default App;

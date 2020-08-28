import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';


//import StartStop from './components/Buttons/StartStop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


import HomePage from './Pages/homePage';
import GameOfLifePage from './Pages/gameOfLifePage';
import NasaPicPage from './Pages/nasaPicPage';
import WeatherPage from './Pages/weatherPage';

function App() {
 
  return (
    <>
     <div className="App">

    <main className="main-cntr">
    <Header />

      <Route exact path="/" component={HomePage} />
      <Route path="/gameoflife" component={GameOfLifePage} />
      <Route path="/nasapic" component={NasaPicPage} />
      <Route path="/weather" component={WeatherPage} />
  
    </main>
     
    </div>
    <Footer />
    </>
  );
}

export default App;

import React, {useState } from 'react';


//Set the map coordinates pattern is allowed to travel
const patternArea = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

// Grid size
let rows = 50;
let cols = 50;

//build a Grid


// Start with an empty Grid


//Set rules for cell movement

const Grid = () => {


//First initial Grid state, which sets up double buffering


//Second initial Grid state, to set up double buffering


//Use state to check if game is running by setting initial state to False

//Check which grid is active

//Generation Counter

//Set default speed

//Set speed reference

 // Double buffer --
  //  when the active grid is 1, set frameOne's state in the gameRules function. 
  //Then set that into frameTwo. 
  //Else, if frameTwo is active set it in the gameRules
  //Put that in frameOne's state. This gets it ready to be handed off
  //This is also where the generation Counter is located


  //Game Logic


  


}

export default Grid;
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
const newBoard = () => {
  const clearedGrid = [];
  for(let i = 0; i < rows; i++){
    clearedGrid.push(Array.from(Array(cols), () => 0));
  }
  return clearedGrid;
}

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




//******** Notes ***********/

// Use React to create Conway's Game of Life

//Steps
/// Generate a new board (grid)

/// Generate the newboard cells & life status
//// Use game rules to check each live cell for neighbors - live or die accoridingly

/// Start/Stop button to start game
/// Pause button to pause
/// Step button to move one generation at a time
/// Speed selector
/// Button to choose starting pattern or random
/// Counter to display current generation number





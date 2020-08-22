import React, {useState,useRef, useEffect } from 'react';


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
const gameRules = (g) => {
  let newGrid = newBoard();
  
  //loop through neighboring cells by row & column
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < cols; j++){
      let neighbors = 0;
      patternArea.forEach(([x,y]) => {
        const blockX = i + x;
        const blockY = j + y;
        if (blockX >= 0 && blockX < rows && blockY >= 0 && blockY < cols) {
          neighbors +=g[blockX][blockY];
        }
      });

      // set rules for cell movement
      if (neighbors < 2 || neighbors > 3) {
        newGrid[i][j] = 0;
      }else if (g[i][j] === 1 && (neighbors === 2 || neighbors ===3)) {
        newGrid[i][j] = 1;
      }else if (g[i][j] === 0 && neighbors === 3 ) {
        newGrid[i][j] = 1;
      }
    }
  }
  return newGrid;
};



const Grid = () => {

//First initial Grid state, which sets up double buffering
const [frameOne, setFrameOne] = useState(() => {
  return newBoard();
});

const frameOneRef = useRef(frameOne);
frameOneRef.current = frameOne;


//Second initial Grid state, to set up double buffering
const [frameTwo, setFrameTwo] =  useState(() => {
  return newBoard();
});

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
//// Use game rules to check each live cell for neighbors - live or die accoridingly.
///// loop through neighboring cells by row & column

/// Start/Stop button to start game
/// Pause button to pause
/// Step button to move one generation at a time
/// Speed selector
/// Button to choose starting pattern or random
/// Counter to display current generation number

// -- use state - state of cells
//-- Buttons should be individual components for re-use. Arrow functions should let them be used with differnet pages click handlers.?


/// https://www.robinwieruch.de/react-state-array-add-update-remove



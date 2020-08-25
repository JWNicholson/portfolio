import React, { useState, useRef, useEffect } from 'react';

import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';

//Set the map coordinates pattern is allowed to travel
const patternArea = [
	[
		-1,
		-1
	],
	[
		-1,
		0
	],
	[
		-1,
		1
	],
	[
		0,
		-1
	],
	[
		0,
		1
	],
	[
		1,
		-1
	],
	[
		1,
		0
	],
	[
		1,
		1
	]
];

// Grid size
let rows = 35;
let cols = 35;

//build a Grid
const newBoard = () => {
	const clearedGrid = [];
	for (let i = 0; i < rows; i++) {
		clearedGrid.push(Array.from(Array(cols), () => 0));
	}
	return clearedGrid;
};

// Start with an empty Grid
const gameRules = (g) => {
	let newGrid = newBoard();

	//loop through neighboring cells by row & column
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			let neighbors = 0;
			patternArea.forEach(([ x, y
			]) => {
				const blockX = i + x;
				const blockY = j + y;
				if (blockX >= 0 && blockX < rows && blockY >= 0 && blockY < cols) {
					neighbors += g[blockX][blockY];
				}
			});

			// set rules for cell movement
			if (neighbors < 2 || neighbors > 3) {
				newGrid[i][j] = 0;
			}
			else if (g[i][j] === 1 && (neighbors === 2 || neighbors === 3)) {
				newGrid[i][j] = 1;
			}
			else if (g[i][j] === 0 && neighbors === 3) {
				newGrid[i][j] = 1;
			}
		}
	}
	return newGrid;
};

const Grid = () => {
	//First initial Grid state, which sets up double buffering
	const [
		frameOne,
		setFrameOne
	] = useState(() => {
		return newBoard();
	});

	const frameOneRef = useRef(frameOne);
	frameOneRef.current = frameOne;

	//Second initial Grid state, to set up double buffering
	const [
		frameTwo,
		setFrameTwo
	] = useState(() => {
		return newBoard();
	});

	//Use state to check if game is running by setting initial state to False
	const [
		running,
		setRunning
	] = useState(false);

	//Check which grid is active
	const [
		activeFrame,
		setActiveFrame
	] = useState(1);

	//Generation Counter
	const [
		genCount,
		setGenCount
	] = useState(0);

	//Set default speed
	const [
		speed,
		setSpeed
	] = useState(500);

	//Set speed reference
	// useRef returns a mutable object whose .current property is initialized to the initial value passed as an arugument. The returned object persists fot the lifetime of the component
	//useRef will give you the same ref object on every render.
	const speedRef = useRef(speed);
	speedRef.current = speed;

	// Double buffer --
	//  when the active grid is 1, set frameOne's state in the gameRules function.
	//Then set that into frameTwo.
	//Else, if frameTwo is active set it in the gameRules
	//Put that in frameOne's state. This gets it ready to be handed off
	//This is also where the generation Counter is located
	const nextGen = () => {
		setGenCount(genCount + 1);
		if (activeFrame === 1) {
			setFrameTwo(gameRules(frameOne));
			setActiveFrame(2);
		}
		else {
			setFrameOne(gameRules(frameTwo));
			setActiveFrame(1);
		}
	};

	const grid = activeFrame === 1 ? frameOne : frameTwo;

	//Game Logic
	useEffect(
		() => {
			let gameEngine = null;
			if (activeFrame && running) {
				gameEngine = setInterval(
					() => {
						nextGen();
					},
					speedRef.current,
					frameOneRef.current
				);
			}
			else if (!running) {
				clearInterval(gameEngine);
				return;
			}
			return () => clearInterval(gameEngine);
		},
		[
			activeFrame,
			nextGen,
			running
		]
	);

	/** Button functions */
	const [
		color,
		setColor
	] = useState('green');
	const [
		toggle,
		setToggle
	] = useState(false);
	const toggleBtn = () => {
		setToggle(!toggle);
		if (toggle === false) {
			//console.log('false')
			setColor('red');
			console.log('runBtnHandler red');
		}
		else {
			setColor('green');
			console.log('runBtnHandler green');
		}
	};

	const startStop = () => {
		setRunning(!running);
	};

	const clearGrid = () => {
		console.log('clearGrid button');
		if (running) {
			setRunning(!running);
		}
		setFrameOne(newBoard());
		setFrameTwo(newBoard());
		setGenCount(0);
	};

	const beehive = () => {
		console.log('beehive');
		const newGrid = Array.from(grid);
		newGrid[16][16] = 1;
		newGrid[17][16] = 1;
		newGrid[17][15] = 1;
		newGrid[18][14] = 1;
		newGrid[19][15] = 1;
		newGrid[19][16] = 1;
		newGrid[18][17] = 1;

		if (activeFrame === 1) {
			setFrameOne(newGrid);
		}
		else {
			setFrameTwo(newGrid);
		}
	};

	const spaceShip = () => {
		console.log('spaceShip');
		const newGrid = Array.from(grid);
		newGrid[11][20] = 1;
		newGrid[14][16] = 1;
		newGrid[15][19] = 1;
		newGrid[15][18] = 1;
		newGrid[15][17] = 1;
		newGrid[15][16] = 1;
		newGrid[14][16] = 1;
		newGrid[13][16] = 1;
		newGrid[12][17] = 1;
		newGrid[14][20] = 1;
		if (activeFrame === 1) {
			setFrameOne(newGrid);
		}
		else {
			setFrameTwo(newGrid);
		}
	};

	const random = () => {
		const randomGrid = [];
		for (let i = 0; i < rows; i++) {
			console.log('random button');
			randomGrid.push(Array.from(Array(cols), () => (Math.random() > 0.5 ? 1 : 0)));
		}

		if (activeFrame === 1) {
			setFrameOne(randomGrid);
		}
		else {
			setFrameTwo(randomGrid);
		}
	};

	const slower = () => {
		console.log('slower');
		setSpeed(1000);
	};

	const faster = () => {
		console.log('faster');
		setSpeed(50);
	};

	const oneStep = () => {
		console.log('oneStep');
		nextGen();
	};

	/* click multi handlers */
	const runBtnHandler = () => {
		console.log('runBtnHandler');
		startStop();
		toggleBtn();
	};

	/** end button functions */

	return (
		<div className="gol-grid-wrapper content-card">
      
			<div
				className="gol-grid-ctnr"
				style={{
					display             : 'grid',
					gridTemplateColumns : `repeat(${cols}, 18px)`
				}}
			>
       
				{grid.map((row, i) =>
					row.map((col, j) => (
						<div
							className={grid[i][j] ? 'grid-cells' : ''}
							key={`${i}-${j}`}
							onClick={() => {
								if (running) {
									return;
								}
								const newGrid = Array.from(grid);
								newGrid[i][j] = grid[i][j] ? 0 : 1;
								if (activeFrame === 1) {
									setFrameOne(newGrid);
								}
								else {
									setFrameTwo(newGrid);
								}
							}}
							style={{
								width: 18,
								height: 18,
								border: '1px solid lightblue',
								background: 'ghostwhite',
								margin: '0'
							}}
						/>
					))
				)}
        
      </div>
			<div className="cntrl-panel">
				<div className="counter-cntr">
					<p className="count">Generation Count: {genCount}</p>
				</div>

				<div className="cntrl-btns-cntr">
					<section className="power-clear-btn-group">
						{/* start/stop */}
            <h3>Controls</h3>
						<button
							className="power-btn"
							data-cy="power-btn"
							style={{ background: color }}
							onClick={runBtnHandler}
						>
							{toggle ? 'Stop' : 'Start'}
						</button>

						{/* clear grid */}
						<button className="clear-btn" data-cy="clear-btn" onClick={clearGrid}>
							Clear
						</button>
              
						<hr />
					</section>
					<section className="shapes-btn-group">
						<h3>Shapes</h3>
						<button className="beeHive-btn" data-cy="beeHive-btn" onClick={beehive}>
							Beehive
						</button>

						<button className="spaceShip-btn" data-cy="spaceShip-btn" onClick={spaceShip}>
							Spaceship
						</button>

						<button
							className="random-btn"
							data-cy="random-btn"
							onClick={random}>
							Random
						</button>

						<hr />
					</section>

					<section className="speed-btn-group">
						<h3>Speed Controls</h3>
						<button className="slower-btn" data-cy="slower-btn" onClick={slower}>
							Slower <FaAngleDoubleDown />
						</button>

						<button className="faster-btn" data-cy="faster-btn" onClick={faster}>
							Faster <FaAngleDoubleUp />
						</button>

						<button className="oneStep-btn" data-cy="oneStep-btn" onClick={oneStep}>
							One Step
						</button>
					</section>
				</div>
			</div>
		</div>
	);
};

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
// -- 1 is active, 0 is off
//-- Buttons should be individual components for re-use. Arrow functions should let them be used with differnet pages click handlers.?

/// Array.from() - https://www.geeksforgeeks.org/javascript-array-from-method-2/

/// https://www.robinwieruch.de/react-state-array-add-update-remove

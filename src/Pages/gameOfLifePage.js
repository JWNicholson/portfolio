import React, { Component } from 'react';

//import Canvas from '../components/Canvas/Canvas';
import Grid from '../components/Grid/Grid';



export default class GameOfLife extends Component {

    
    render() {
        return (
            <div className="gol-instruction-container">
                <section className="content content-card">
               <h1>Conway's Game Of Life</h1>
               <p>The Game Of Life is a simulation developed in 1970 by mathematician John Conway. It applies rules to create Cellular Automation. Cellular Automation is a grid of cells that cycle through different states. It is "Turing Complete".Turing Complete means it can manipulate data-manipulation rule sets.</p>

               <p>The simulation follows 4 simple rules, which give infinite different results. Sometimes it is a repeating sequence (somtimes referred to as a glider).</p> 
        <p>Occasionaly all of the cells die or settle into a still pattern.</p>
        <p><small>Note: this version is not mobile friendly yet.</small></p>
               </section>
                <section className="content content-card">
                 
                 <h2>Rules</h2>
                 
                   <p>1. Any live cell with fewer than two live neighbors dies, as if by underpopulation</p>
                       <p>2. Any live cell with two or three live neighbors lives on to the next generation</p>
                       <p>3. Any live cell with more than three live neighbors dies, as if by overpopulation</p>
                       <p>4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction</p>
                     <hr/>
                       <h4>How To Play</h4>
            <p>Click individual cells to make your own pattern or use one of the buttons below. Then click Start. When the simulation is running, using the buttons you can speed it up or slow it down. To slow it down the first time you must speed it up first.</p> 
            <p>
            To see one generation at a time, while the sim is running, hit the stop button, then you can use the One Step button. To start fresh, use the clear button.
                </p> 
                 </section>
           
             <Grid /> 
               
            </div>
        
           
        )
    }
}

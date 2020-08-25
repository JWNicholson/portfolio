import React, { Component } from 'react';

import Grid from '../components/Grid/Grid';


export default class GameOfLife extends Component {

    
    render() {
        return (
            <div className="gol-instruction-container">
                <section className="content content-card">
               <h1>John Conway's Game Of Life</h1>
        
               <p>The simulation follows 4 simple rules, which give infinite different results. Sometimes it is a repeating sequence (somtimes referred to as a glider).
        Occasionaly all of the cells die or settle into a still pattern.
        </p> 
                 
                 <h3>Rules</h3>
                 
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
                <small><em>This page works best in landscape mode on small screens</em></small>
                 </section>
           
             <Grid /> 
               
            </div>
        
           
        )
    }
}

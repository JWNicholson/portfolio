import React, { Component } from 'react';

//import Canvas from '../components/Canvas/Canvas';
import Grid from '../components/Grid/Grid';



export default class GameOfLife extends Component {

    
    render() {
        return (
            <div>
               <h1>Conway's Game Of Life</h1>
               <p>
               Chocolate chip mint chocolate french vanilla strawberry. Rocky road dark chocolate coffee dark chocolate pistachio peanut butter mint chocolate chip cake batter pistachio peanut butter mint chocolate chip chocolate chip cookie dough strawberry cake batter. Cake batter chocolate french vanilla cookies and cream, peanut butter chocolate chip cookie dough rocky road rocky road vanilla chocolate chip mint peanut butter strawberry mint cookies and cream. Peanut butter cake batter peanut butter dark chocolate chocolate. Peanut butter peanut butter mint coffee Rocky road coffee chocolate chip.
               </p>
               <h2>Rules</h2>
                 <ul>
                   <li>Any live cell with fewer than two live neighbors dies, as if by underpopulation</li>
                       <li>Any live cell with two or three live neighbors lives on to the next generation</li>
                       <li>Any live cell with more than three live neighbors dies, as if by overpopulation</li>
                       <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction</li>
                 </ul>
           
             <Grid /> 
                 {/* <Canvas /> */}
            </div>
        
           
        )
    }
}

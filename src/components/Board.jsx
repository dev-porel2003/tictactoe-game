import { useState } from 'react';
import Square from './Square'
const Board = ()=> {
    const [square,setsquare]=useState(Array(9).fill(null));
    const [isXNext,setIsXNext]=useState(false);


    const handlesquareclick = clickedposition =>{

      if(square[clickedposition]){
        return;
      }
      setsquare(currentsquare=>{
        return currentsquare.map((squarevalue,position) => {

        if(clickedposition === position){
          return isXNext ? 'X':'O';
        }
           return squarevalue;
      });
      });
      setIsXNext((currentIsNext)=>!currentIsNext)
    };
    const rendersquare=position =>{
      return(
        <Square 
          value={square[position]} 
            onClick={ () =>  handlesquareclick(position) }/>
      );
    };
    return (
        <div className="Board"> 
           <div className="Board-row">
            {rendersquare(0)}
            {rendersquare(1)}
            {rendersquare(2)}
             
           </div>
          <div className="Board-row">
            {rendersquare(3)}
            {rendersquare(4)}
            {rendersquare(5)}
            </div>
          <div className="Board-row">
            {rendersquare(6)}
            {rendersquare(7)}
            {rendersquare(8)}
          </div>
     </div>
    );
};
export default Board;
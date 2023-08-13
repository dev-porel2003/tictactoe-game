import './components/style.scss';
import { useState } from 'react';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './winner';

function App() {

  const [square,setsquare]=useState(Array(9).fill(null));
  const [isXNext,setIsXNext]=useState(false);

  const winner = calculateWinner(square);
  
  const handlesquareclick = clickedposition =>{

    if(square[clickedposition] || winner ){
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

  return  <div  className="app">
       <StatusMessage winner={winner} isXNext={isXNext} square={square}/>
       <Board square={square} handlesquareclick={handlesquareclick}/>
  </div>;
  
}

export default App;

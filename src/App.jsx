import './components/style.scss';
import { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './winner';
function App() {

  const [square,setsquare]=useState(Array(9).fill(null));
  const [isXNext,setIsXNext]=useState(false);

  const winner = calculateWinner(square);
  const nextplayer= isXNext ? 'X': 'O';
  const statusmessage =winner? `Winner is ${winner}`: ` next player is ${nextplayer}`;
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
       <h2>{statusmessage}</h2>
       <Board square={square} handlesquareclick={handlesquareclick}/>
  </div>;
  
}

export default App;

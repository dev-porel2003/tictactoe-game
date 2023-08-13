import './components/style.scss';
import { useState } from 'react';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './winner';
import History from './components/History';

function App() {
  const [history ,setHistory]=useState([{square:Array(9).fill(null),isXNext:false}]);
  const [currentMove,setCurrentMove]=useState(0);
  const gamingBoard = history[currentMove];

  

  const winner = calculateWinner(gamingBoard.square);
  
  const handlesquareclick = clickedposition =>{

    if(gamingBoard.square[clickedposition] || winner ){
      return;
    }
    setHistory(currentHistory=>{
      const isTraversing=currentMove+1 !==currentHistory.length;
      const lastGamingState=isTraversing ? currentHistory[currentMove] :history[history.length-1];

      
      const nextSquareState = lastGamingState.square.map((squarevalue,position) => {

      if(clickedposition === position){
        return lastGamingState.isXNext ? 'X':'O';
      }
         return squarevalue;
    });
    const base=isTraversing ? currentHistory.slice(0,currentHistory.indexOf(lastGamingState)+1):currentHistory;

      return base.concat({square:nextSquareState,isXNext:!lastGamingState.isXNext});
     });
    setCurrentMove(move=>move+1);
  };
  const moveTo=move=>{
    setCurrentMove(move);
  }

  return  <div  className="app">
       <StatusMessage winner={winner} gamingBoard={gamingBoard} />
       <Board square={gamingBoard.square} handlesquareclick={handlesquareclick}/>
       <h1>Current Game History</h1>
       <History history={history}  moveTo={moveTo} currentMove={currentMove}/>
  </div>;
  
}

export default App;

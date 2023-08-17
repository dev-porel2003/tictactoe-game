import Square from './Square';
const Board = ({square , handlesquareclick,winningSquare})=> {
  
    const rendersquare=position =>{
      const isWinningSquare=winningSquare.includes(position);
      return(
        <Square value={square[position]} 
            onClick={ () =>  handlesquareclick(position) }
            isWinningSquare={isWinningSquare}
            />
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
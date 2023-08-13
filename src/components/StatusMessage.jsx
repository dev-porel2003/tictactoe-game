const StatusMessage=( {winner, isXNext, square }) => {
    const nomovesleft = square.every( squarevalue => squarevalue !==null );
    const nextplayer= isXNext ? 'X': 'O';
    const renderstatusmessage =() =>{
        if(winner){
            return (
            <>
                winner in {' '}
                <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
                    {winner}
                    </span>
             </>
            );
        }
        if (!winner && nomovesleft){
            return (
            <>
                <span className="text-orange">O</span> and {' '}
            <span className="text-green">X</span> tied
            </>
            );
        }
        if(!winner && !nomovesleft){
            return (
                    <>
                       Next player is 
                        <span className={isXNext ? 'text-green' : 'text-orange'}>
                           {nextplayer}
                        </span>
                   </>
                   );
        }

        return null;
    };
    return (
     <h2 className="status-message">
            {renderstatusmessage()}
    </h2>
    );
};

export default StatusMessage;
export const GameHeader = ({score, moves})=>{
    return(
        <><div className="game-header">
            <h1>Memory Card Game</h1>
        </div><div className="stats">
                <div className="state-items">
                    <span className="state-lable">Score : </span>{}
                     <span className="state-value"> {score}</span>
                </div>
                <div className="state-items">
                <span className="state-lable">Moves :</span>{}
                     <span className="state-value"> {moves}</span>
                </div>
            </div></>
    )
}
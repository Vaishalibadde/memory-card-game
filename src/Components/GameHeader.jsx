export const GameHeader = ({score, moves})=>{
    return(
        <><div className="game-header">
            <h1>Memory Card Game</h1>
        </div><div className="stats">
                <div className="state-item">
                    <span className="state-label">Score : </span>{}
                     <span className="stat-value"> {score}</span>
                </div>
                <div className="state-item">
                <span className="state-label">Moves :</span>{}
                     <span className="stat-value"> {moves}</span>
                </div>
            </div></>
    )
}


export function Winner ( {winner, resetGame} ){

    if (winner === null){
        return null;
    }

    const winnerText = winner === false ? 'Empate' : 'Gano el jugador';
    return(
            <section className='winner'>
                <div className="text">
                    <h2>
                        {winnerText}
                    </h2>
                    {winner && <span className="ganador">{winner}</span>}
                </div>
                
                <button onClick={resetGame}>Restar</button>
            </section> 
    )
}
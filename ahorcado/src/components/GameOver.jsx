export function GameOver( {mistakes, gameWin, resetGame} ) {

    const textGameOver =  (gameWin ? 'Ganaste!' : 'Perdiste :(');

    return(
        <section className="game-over">
            <div className="text-game-over">
                <p>{textGameOver}</p>
                <button onClick={resetGame}>Restar</button>
            </div>
        </section>
    )
}
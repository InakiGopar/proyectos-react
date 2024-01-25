export function GameOver( {mistakes, gameWin, resetGame} ) {
    const textGameOver = mistakes >= 3 ? 'perdiste!' : ' ';
    const textWin = gameWin ? 'ganaste!' : ' ';

    return(
        <section className="game-over">
            <div className="text-game-over">
                <p>{textGameOver}</p>
                <p>{textWin}</p>
                <button onClick={resetGame}>Restar</button>
            </div>
        </section>
    )
}
export function Output( {hiddenWord, successes, mistakes, guessedLetters, gameWin} ) {

    const textGameOver = mistakes >= 6 ? 'perdiste' : ' ';
    const textWin = gameWin ? 'ganaste' : ' ';

    //esta funcion crea un nuevo arreglo donde cada letra de hiddenWord se reemplaza por si misma
    //si esta en el arreglo pasado como prop gussedLetters o por un '_' si no esta.
    const getHiddenWord = () => {
        return hiddenWord
            .split('')
            .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
            .join(' ');
    };

    return(
        <>
        <h3>{getHiddenWord()}</h3>
        <h3> 
            Letras: {' '}
            {guessedLetters + ' '}
        </h3>
        <h3> Aciertos: {successes}</h3>
        <h3> Errores: {mistakes}</h3>
        <p>{textWin}</p>
        <p>{textGameOver}</p>
        </>
    )
}

export default Output;
export function Output( {hiddenWord, successes, mistakes, guessedLetters} ) {

    console.log(guessedLetters + 'soy del componente');
    return(
        <>
        <h3>{hiddenWord}</h3>
        <h3> Letras: {' '}
            {guessedLetters + ' '}
        </h3>
        <h3> Aciertos: {successes}</h3>
        <h3> Errores: {mistakes}</h3>
        </>
    )
}

export default Output;
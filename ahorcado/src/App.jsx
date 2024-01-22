import { useState } from 'react';
import Menu from './components/Menu';
import Input from './components/Input';
import Output from './components/Output';
import './App.css'

function App() {
  //Estados
  const [startKey, setStartKey] = useState(false);
  const [hiddenWord, setHiddenWord] = useState('');
  const [successes, setSuccesses] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [gameWin, setGameWin] = useState(false);
  
  //variables para manejar la logica de los estilos 
  const classGameStart =  startKey ? 'startDisable' : 'activeStart';
  const classGameBody  =  startKey ? 'activeGame' : 'gameDisabled';

  //funcion para manejar el inicio del juego
  const handleStartKey = () =>{
    setStartKey(true);
  }

  //funcion para manejar el input de la palabra a adivinar
  const handleInputStart = (inputValue)=> {
    setHiddenWord(inputValue);
  }

  //funcion para manejar la entrada de la palabra elegida por el usuario
  const handleInputGame = (inputValue, hiddenWord) =>{ //SE DECLARA
    
    if(!hiddenWord.includes(inputValue)){
      setMistakes(mistakes + 1);
      return;
    }

    setSuccesses(successes + 1);
    //mostrar las letras acertadas
    //copio el arrelo gussedLetters y le agrego la palabra 
    setGuessedLetters([...guessedLetters, inputValue]);
  }


  //esta funcion tiene la logica para corroborar que el jugador gano el juego
  const handleGameWon = () =>{
    const newHiddenWord = [...hiddenWord];
    const newGussedLetters = [...guessedLetters];
    //si todas las letras de la palabra a adivinar estan incluidas en las letras que coloco el usuario
    const allLettersGuessed = newHiddenWord.every(letter => newGussedLetters.includes(letter));
    if(newHiddenWord.length > 0 && allLettersGuessed){
      setGameWin(true);
    }
  }


  return (
    <>
      <div>
        <section className={classGameStart}>
          <Menu
            gameStart = {handleStartKey}
            handleStart = {handleInputStart}
          />
        </section>
        <section className= {classGameBody}>
          <Input 
            handleInput = {handleInputGame} 
            hiddenWord = {hiddenWord}
            handleGameWon = {handleGameWon}
            />

          <Output 
            hiddenWord = {hiddenWord}
            successes = {successes}
            mistakes = {mistakes}
            guessedLetters = {guessedLetters}
            gameWin = {gameWin}
          />
        </section>
      </div>
    </>
  )
}

export default App

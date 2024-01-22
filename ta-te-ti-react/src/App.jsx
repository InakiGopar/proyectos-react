import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Square } from './components/Square';
import { TURNS } from './constants';
import { checkWinner, checkGameOver} from './logic';
import { Winner } from './components/Winner';
import './App.css';


function App() {
  //ESTADOS
  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board');
    console.log(boardFromStorage);
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null); //El tablero (la funcion fill() rellena el array con los valores que le asignemos)
  });
  //estado para saber de quien es el turno
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null);  //estado para saber quin es el ganador



  const updateBoard = (index)=>{
    //si ya tiene un valor o hay un ganador
    //no actualizamos esa posicion
    if(board[index] || winner){
      return;
    }
    const newBoard = [...board]; //copio el board y lo guardo en la variable newBoard
    newBoard[index] = turn; //x u o
    setBoard(newBoard);
    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //guardo la partida 
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);
    //revisar si hay un ganador
    const newWinner = checkWinner(newBoard);
    if(newWinner){
      confetti(); //papelitos de colores
      setWinner(newWinner);
    }
    //si entra aca es que no hay un ganador por lo tanto verifica que el juego esta terminado
    // con la funcion checkGameOver() y setea el estado del ganador a falso
    else if(checkGameOver(newBoard)){
      setWinner(false);
    } 
  }

  const resetGame = ()=>{
    //seteamos los useStates a sus estados originales
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }

  return (
    <>
      <main className='board'>
        <h1>TA TE TI</h1>
        <section className='game'>
          {
            board.map((square, i) => {
              return (
                <Square
                  key={i} //al ser un arreglo es necesario devolver una key
                  updateBoard={updateBoard} //actualiza el tablero
                  index={i} //es la prop index del COMPONENTE Square
                >
                  {square}
                </Square>
              )
            })
          }
        </section>

        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X} 
          </Square>
          <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>
        
        <Winner resetGame={resetGame} winner = {winner} />
      </main>
    </>
  )
}

export default App;

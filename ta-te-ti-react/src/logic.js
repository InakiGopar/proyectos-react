import { WINNER_COMBOS } from "./constants";

//logica de ganador
export const checkWinner = (boardToCheck)=>{
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        //boardToCheck[a] -> x u o 
        if( boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c] ){
            return boardToCheck[a]; // x u o
        }
    }
    return null; //si no hay ganador
}

//logia del empate
export const checkGameOver = (newBoard)=>{
    //hay empate si no hay espacios vacios en el tablero
    return newBoard.every((square)=> square != null); //corrobora que todas las posiciones del arreglo sean distntas a null
}


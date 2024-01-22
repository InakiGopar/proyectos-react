/*
    Square el cuadrado del tablero (COMPONENTE)
    el cual va a tener diferentes propiedades:
    -children = lo que va a contener dentro del tablero;
    -isSelecetd = si el cuadrado esta seleccionado;
    -updateBoard = actualizar el tablero;
    -index = para saber que indice tiene cada cuadradito del tablero
*/
export const Square = ( {children, isSelected ,updateBoard, index} ) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`; //si esta seleccionado tiene el clasName = 'square is-selected' si no simplemente tiene la clasName square
    const handleClick = () =>{
        updateBoard(index);
    }
    return(
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}
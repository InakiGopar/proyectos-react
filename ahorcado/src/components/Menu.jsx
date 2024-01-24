import { useState
 } from "react";
export function Menu( {gameStart, handleStart} ) {

    // estado para manejar el estado del input 
    const [inputValueStart, setInputValueStart] = useState('');

    //funcion para capturar el valor del input
    const handleInputValue = (value)=> {
        console.log(value);
        setInputValueStart(value.target.value)
    }

    //funcion para manejar el inicio del juego
    const handleSumbitStart = (event)=> {
        event.preventDefault();

        handleStart(inputValueStart);
        setInputValueStart('');

        if(inputValueStart.length > 0){
            gameStart();
        }
    }


    return (
        <section className="menu">
            <header className="menu-header">
                <h1>
                    <span className="c1">A</span>
                    <span className="c2">h</span>
                    <span className="c3">o</span>
                    <span className="c4">r</span>
                    <span className="c5">c</span>
                    <span className="c6">a</span>
                    <span className="c7">d</span>
                    <span className="c8">o</span>
                </h1>
            </header>
            <form className="menu-form" onSubmit={handleSumbitStart}>
                <h4>Ingrese una palabra para iniciar el juego</h4>
                <input type="text" onChange={handleInputValue} />
                <button>A jugar!</button>
            </form>
            <footer className="menu-footer">
                Hecho por iñaki gopar
            </footer>
        </section>
    )
}

export default Menu;
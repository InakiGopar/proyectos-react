import { useState } from "react";

function Input( {handleInput, hiddenWord}) {
    //estado para manejar el estado del input 
    const [inputValue, setInputValue] = useState('');

    //La funcion handleChange maneja el valor del input
    const handleChange = (value)=> {
        setInputValue(value.target.value);
    }

    const handleSumbit = (event)=>{
        event.preventDefault();
        //SE EJECUTA la funcion handleInput pasada como prop
        handleInput(inputValue, hiddenWord); 
        //limpio el valor del input despues de enviar
        setInputValue('');
    }
    return(
        <>
        <form onSubmit={handleSumbit}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button>Corroborar</button>
        </form>
        </>
    )
}

export default Input;
import { useState } from "react"


export const useCounter = ( initialValue =0 ) =>{

    const [counter, setCounter] = useState(initialValue);

    const increment = ( value = 1 ) =>{
        setCounter( counter + value);
    }

    const decrement= ( value = 1 )  => {
        // Aca el counter no depende de los cambios de estado, toma el valor y se evalua
        if( counter === 0) return;
        setCounter( counter - value );
    }

    const reset = () =>{
        // Si hago esto el valor no cambia , no le avisa nada a aReact , por eos no puedo usarlo
        //setCounter( counter );
        setCounter( initialValue );
    }

    
    return {
        counter,
        increment,
        decrement,
        reset
    }
}
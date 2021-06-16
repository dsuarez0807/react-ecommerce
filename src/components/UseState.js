import React, {useState} from 'react';

function UseState() {
    const [ animal, setAnimal] = useState('perro')
    function handlerAnimal(){
        setAnimal('Gato')
    }
    return (
        <div>
            <button onClick={handlerAnimal}>Cambiar animal</button>
            {console.log(animal)}
        </div>
    )
}

export default UseState;
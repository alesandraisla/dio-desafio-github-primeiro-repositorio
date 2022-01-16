//Construindo component de forma funcional

const Card = () => {
        return(
            <h1>Card</h1>
        )
}

export default Card;



// No index.js deve importar e colocar a tag no caso <card>
// função que acrescenta +1 e decrementa -1

import { useState, useEffect } from 'react';

const [valor, setValor] = userState(0);
const [buttonStyle, setButtonStyle] = userState("btn-ativado")

useEffect(() => {
    alert('Você não pode mais diminuir itens')
}, [buttonStyle])

function Adicionar () {
    setValor(valor + 1);
    setButtonStyle("btn-ativado");
}

function Remover() {
    if(valor <= 1) {
        setButtonStyle("btn-desativado");
    }
    if(valor > 0){
        setValor(valor - 1);
    }
}

<button
    type="button"
    className="btn"
    onClick={Adicionar}>
    Adicionar
</button>
<button
    type="button"
    className={buttonStyle}
    onClick={Remover}>
    Remover
</button>
<p>{valor}</p>


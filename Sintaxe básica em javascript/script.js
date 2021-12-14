// alert('Oieee')

// tipos primitivos

// let vOuF = false;
// console.log(typeof(vOuF));

// let numberQualquer = 15;
// console.log(typeof(numberQualquer));

// let pessoa = "Yuna";
// console.log(typeof(pessoa));

// let nome = "Vanessa";
// console.log(nome);
// nome = "Thiago";
// console.log(nome);

// const nome2 = "Ana";
// console.log(nome2);
// nome2 = "Fernanda";
// console.log(nome2)

// let escopoGlobal = 'Global';
// console.log(escopoGlobal);

// function escopoLocal() {
//     let localInterno = 'Interno';
//     console.log(localInterno);
// }

// escopoLocal();

/*
//Atribuição
let atribuicao = 'Lara';
console.log(atribuicao)

//Comparação
let comparacao = '0' == 0;
console.log(comparacao)

// Comparacao identica
let identica = '0' === 0;
console.log(identica)

// Operação aritmética
let somar = 2 + 2;
console.log(somar);
let subtrair = 10 - 5;
console.log(subtrair);
let multiplicar = 2 * 2;
console.log(multiplicar);
let divisao = 10 / 5;
console.log(divisao);
let resto = 10 % 2;
console.log(resto)
let potenciacao = 2 ** 10;
console.log(potenciacao);

*/

/*
let array = [ 'String', true, 15, [20]];
// console.log(array);
// console.log(array[2])

array.forEach(function(item, index){
    console.log(item, index)
})

array.push('Novo item');
console.log(`push ${array}`);

array.pop();
console.log(`pop ${array}`)

array.shift();
console.log(`shift ${array}`);

array.unshift('Novo item');
console.log(`unshift ${array}`);

console.log(`indexof ${array.indexOf(true)}`)

let novoArray = array.slice(0,3)
console.log(`novo array usando slice ${novoArray}`)

array.splice(0,3);
console.log(`splice ${array}`)

*/

/*
let objeto = {
    string: 'string',
    number: 15,
    boolean: true,
    array: ["array"],
    objetoInterno: {
        interno: 'objeto interno'
    }
}

console.log(objeto);

let apenasString = objeto.string;
console.log(apenasString)

let {number, objetoInterno} = objeto;
console.log(number, objetoInterno);

*/

/*

let jogador1 = 2;
let jogador2 = 0;
let placar

jogador1 != -1 && jogador2 != -1 ? console.log(`Os jogadores são válidos`): console.log(`Os jogadores são inválidos`)

if (jogador1 != -1) {
    if (jogador1 > 0 && jogador2 == 0) {
        console.log(`Jogador 1 marcou ponto`);
        placar = jogador1 > jogador2;
    } else if (jogador2 > 0 && jogador1 == 0) {
        console.log(`Jogador 2 marcou ponto`);
        placar = jogador2 > jogador1;
    } else {
        console.log(`Ninguem marcou ponto`);
    }
}
switch(placar) {
    case placar = jogador1 > jogador2:
    console.log(`Jogador 1 ganhou`)
    break;
    case placar = jogador2 > jogador1:
    console.log(`Jogador 2 ganhou`)
    break;
    default:
    console.log(`Ninguem ganhou!`);
}

*/

/*

let array = [ 'valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let objeto = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3'
}

for (let index = 0; index < array.length; index++) {
    console.log(index)
}

//imprime o indice
//Percorrendo array
for (const key in array) {
   console.log(key, array)
}

//Percorrendo cada propriedade do objeto
for(i in objeto) {
    console.log(i)
}

//imprime o valor
for (const iterator of array) {
    console.log(iterator)
}

//Não da para utilizar com objeto, pois irá imprimir cada parte
for (const iterator of objeto.propriedade1) {
    console.log(iterator)
    
}*/
/*
let a = 0;
while(a < 10) {
    a++;
    console.log(a)
}

do{
   a++;
   console.log(a) 
}while(a < 10)
*/

function executar() {
    console.log('Oiee')
}

executar()
//Map
//Retorna um novo array, o original não é modificado

const array = [ 2,4,6,8,10];

let mapeando = array.map((item) => item * 2);

//ForEach
//
let paraCada = array.forEach((item) => item * 2);

console.log(array);
console.log(mapeando);
console.log(paraCada)


const frutas = ['maça', 'Banana', 'Pera', 'Manga madura', 'Morango', 'Manga' ]

let filtragem = frutas.filter((fruta) => fruta.includes('Manga'))
console.log(filtragem)

// reduce

const callBackFn = function(accumulator, currentValue, index, array) {

}

array.reduce(callBackFn, initialValue)

// Acumulator/prevValue: Acumulador de todas as chamadas de callbackfn
//currentValue: elemento atual sendo acessado pela função
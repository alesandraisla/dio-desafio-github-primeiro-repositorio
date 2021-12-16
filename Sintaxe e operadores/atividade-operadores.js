/*
Criar uma função que recebe dois números como parâmetros
Confira se os números são iguais
Confira se a soma dos números é maior que 10 ou menor que 20
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma que é maior/menor que 10 e maior/menor que 20
*/

// function compareOsNumeros(num1, num2) {
//     soma = num1 + num2
//     if(num1 === num2 && soma > 10 && soma < 20) {
//         return `Os números ${num1} e ${num2} são iguais. Sua soma é ${soma} que é maior que 10 e menor que 20`;
//     } else if (num1 === num2 && soma < 10 && soma < 20 ){
//         return `Os números ${num1} e ${num2} são iguais. Sua soma é ${soma} que é menor que 10 e menor que 20`;
//     } else if (num1 === num2 && soma > 10 && soma > 20){
//         return `Os números ${num1} e ${num2} são iguais. Sua soma é ${soma} que é maior que 10 e maior que 20`;
//     } else if ( num1 != num2 && soma > 10 && soma < 20){
//         return `Os números ${num1} e ${num2} são diferentes. Sua soma é ${soma} que é maior que 10 e menor que 20`;
//     } else if ( num1 != num2 && soma > 10 && soma > 20){
//         return `Os números ${num1} e ${num2} são diferentes. Sua soma é ${soma} que é maior que 10 e maior que 20`;
//     }else if ( num1 != num2 && soma < 10 && soma < 20) {
//         return `Os números ${num1} e ${num2} são diferentes. Sua soma é ${soma} que é menor que 10 e menor que 20`;
//     }
// }

// console.log(compareOsNumeros(2,30))

/*Resolução */

function comparaNumeros(num1, num2) {
    if(!num1 || !num2 ) return `O valor digitado está incorreto, favor digitar número!`
    const primeiraFrase = criarPrimeiraFrase(num1, num2);
    const segundaFrase = criarSegundaFrase(num1, num2);
    return `${primeiraFrase} ${segundaFrase}`
}

function criarPrimeiraFrase(num1, num2) {
    let saoIguais = '';
    if(num1 !== num2) {
        saoIguais = 'não';
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais`
}

function criarSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let resultado10 = `menor`;
    let resultado20 = `menor`;
    const compara10 = soma > 10;
    const compara20 = soma > 20;
    if(compara10) {
        resultado10 = `maior`
    } 
    if(compara20) {
        resultado20 = `maior`
    }
    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`
}

console.log(comparaNumeros("1",10))
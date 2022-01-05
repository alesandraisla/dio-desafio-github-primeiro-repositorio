// // Manipulando o objeto error

// new Error (message) 

// const MeuErro = new Error('Mensagem inválida');
// MeuErro.name = 'InvalidMessage';
// throw MeuErro;

/**
 * Criar uma function que receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, o erro será lançado:
 * - Criar uma função que recebe um array e um número.
 * - Validações:
 * - Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
 * - Se o array não for do tipo 'object', lance um erro do tipo typeError
 * - Se o número não for do tipo 'number', lance um erro do tipo TypeError
 * - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
 * - Utilize a declação try...catch
 * - Filtre as chamadas de catch por cada tipo de erro utilizando o operador intanceof
 */

// let arr = [1,2,3,5,6,10,15]
// function mostrarNoConsole(array, numero) {
//     return array, numero;
// }

// console.log(mostrarNoConsole(arr,5))

function validaArray(arr, num) {
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw new TypeError(" Array precisa ser do tipo object");

        if(typeof num !== 'number') throw new TypeError("Number precisa ser do tipo number");

        if(arr.length !== num) throw new RangeError("Tamanho inválido");

        return arr;

    } catch(e){
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError");
            console.log(e.message);
        } else if( e instanceof TypeError) {
            console.log("Este erro é um TypeError");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RaneError");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}

console.log(validaArray([], 'a'));
console.log(validaArray([], 5));
console.log(validaArray([1,2,3,4,5], 5));



let linhas = [1,2,3,4,5,6,7,8, 1];

let numero = parseInt(linhas.shift());
let impar = 0;

for(let i = 0; i < linhas.length; i++) {
    if(i % 2 == 1) {
        impar = linhas[i]
        console.log(`impares ${impar}`)
    }
}

console.log(linhas)
console.log(numero)


const morango = {
    value: 5,
};

const banana = {
    value: 3,
};

const nums = [ 2, 3,10, 15, 31, 47]

function mapComThis(array, thisArg) {
    return array.map(function (item) {
        return item * this.value;
    }, thisArg);
}

console.log('This -> Morango', mapComThis(nums, morango))
console.log('This -> Banana', mapComThis(nums, banana))
function mapSemThis(array) {
    return array.map(function(item) {
        return item * 2;
    })
}

console.log('Array sem this', mapSemThis(nums))

function filtraPares(array) {
    return array.filter(callBack)
}

function callBack(item) {
    return item % 2 === 0;
}


console.log('Filter', filtraPares(nums))

function somaNumeros(array) {
    return array.reduce(function(prev, current) {
        return prev + current;
    }, 0)
}
// Cada rodada o vai do prev vai aumentar

console.log(somaNumeros(nums))


const lista = [
    {
        nome: 'Arroz',
        preco: 8.99
    },
    {
        nome: 'Feijão',
        preco: 9.50
    },
    {
        nome: 'Farinha',
        preco: 4
    }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('Rodada ', index + 1)
        console.log({prev})
        console.log({current})
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista))




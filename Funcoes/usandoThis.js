function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
}

const pessoa1 = {
    nome:'Yuna',
    idade: 28
}

const pessoa2 = {
    nome:'Tidus',
    idade:30
}

const animal = {
    nome:'Zoe',
    idade: 1
}

console.log(calculaIdade.call(animal, 30))
console.log(calculaIdade.apply(animal, [30]))

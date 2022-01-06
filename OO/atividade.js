/**
 * Crie a classe contaBancaria que possui os parametros agencia, numero, tipo e saldo
 * Dentro de contaBancaria, consrtua o getter e o setter de saldo
 * Dentro de contaBancaria, crie os métodos sacar e depositar
 * Crie uma classe-filha chamada contaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito
 * Ainda em contaCorrente construa o getter e o setter de cartaoCredito
 * Ainda em contaCorrente faca com que o tipo seja 'conta corrente' por padrao
 * Crie uma classe-filha chamada contaPoupanca que herda todos os parametros de contaBancaria
 * Crie uma classe filha chamada contaUniversitaria que herda todos os parâmetros de contaBancaria
 * Faça com que o método saque de contaUniversitaria apenas seja capaz de sacar valores menos que 500 reais.
 */

class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    //_ para que a funcao get e set tenha esse nome, mas a propriedade nao

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        return this._saldo = valor;
    }

    sacar(valor) {
        if(valor > this._saldo) {
            return "Operação negada"
        }
            
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        return this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupanca'
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if(valor > 500) {
            return "Operação negada"
        }

        this._saldo = this.saldo - valor;
        return this._saldo;

    }
}

const minhaConta = new ContaCorrente(1,234,true);
console.log(minhaConta.saldo)
console.log(minhaConta.depositar(1000))
console.log(minhaConta.sacar(500))
console.log(minhaConta.saldo)
console.log(minhaConta.sacar(4000))

console.log(" ==============================")
const minhaContaPoupanca = new ContaPoupanca(1,22);
console.log(minhaContaPoupanca.saldo)
console.log(minhaContaPoupanca.depositar(1000))
console.log(minhaContaPoupanca.sacar(500))
console.log(minhaContaPoupanca.saldo)
console.log(minhaContaPoupanca.sacar(4000))

console.log(" ==============================")

const uni = new ContaUniversitaria(1,22);
console.log(uni.saldo)
console.log(uni.depositar(1000))
console.log(uni.sacar(500))
console.log(uni.saldo)
console.log(uni.sacar(4000))


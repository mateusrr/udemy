//Criando uma Conta para especializar a mesma em Corrente e Poupança
//Contendo parâmetros de Agencia, Conta, Saldo
//Além de Limite para a Corrente e Poupança
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    //Checando se tem saldo na conta.
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }
    
    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(`Agência: ${this.agencia} | Conta: ${this.conta} | Saldo: ${this.saldo.toFixed(2)}`)
}

const conta1 = new Conta(01, 07, 12)
const conta2 = new Conta(02, 08, 500)
/*conta1.depositar(200)
conta2.sacar(300)
console.log(conta1,'-', conta2)*/

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if(this.saldo + this.limite) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

function ContaPoupanca(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const corrente = new ContaCorrente(11, 22, 0, 100)
const poupanca = new ContaPoupanca(30, 01, 700, 150)
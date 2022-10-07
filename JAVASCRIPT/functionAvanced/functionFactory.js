// Factory function
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${this.nome} ${this.sobrenome} está ${assunto}`
        },
        altura: a,
        peso: p,
        // GET faz com que o IMC se torne um atributo do objeto
        get imc() { //GET faz com que o IMC se torne um atributo do objeto
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2) //casas decimais
        }
    }
}

const p1 = criaPessoa('Mateus', 'Rocha', 1.72, 74)
// após usar GET a declaração de imc, passa a ser só imc sem parenteses.
console.log(p1.imc)
console.log(p1.fala('falando sobre JS.'))
     
/*
fetch('pessoas.json') //arquivo json
  //motivos de ter dois then, pegou a resposta e converteu para json
  .then(resposta => resposta.json()) //capturando os dados
  .then(json => ElementosPagina(json)) //dados sendo direcionados para função ElementosPagina.
*/

axios('pessoas.json')
  .then(resposta => ElementosPagina(resposta.data))

//função para retornar os dados na página.
function ElementosPagina(json) {
  //criando uma tabela.
  const table = document.createElement('table')
  //irá retorna um objeto de cada.
  for(let pessoa of json) {
    const tr = document.createElement('tr')
    
    //necessário criar uma TD para cada chave.
    //usando LET para poder reaproveitar a variável.
    let td = document.createElement('td')
    td.innerHTML = pessoa.nome
    tr.appendChild(td)
  
    td = document.createElement('td')
    td.innerHTML = pessoa.idade
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerHTML = pessoa.salario
    tr.appendChild(td)

    table.appendChild(tr)
  }

  //foi criado uma Div com Class Resultado no arquivo index.html
  const resultado = document.querySelector('.resultado')
  resultado.appendChild(table)
}
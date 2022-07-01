// Seleção das classes criadas no index.html
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');
// Fim

// Função para retornar o Li
function criaLi() {
    const li = document.createElement('li');
    return li;
}

// Evento para que a tecla Enter seja habilitada ao preencher o campo.
inputTarefa.addEventListener('keypress', function(e) {
    // 13 é o código da tecla Enter - console.log(e) - visto no Console
    if (e.keyCode === 13) {
      if (!inputTarefa.value) return;
      criaTarefa(inputTarefa.value);
    }
});

// Após o preenchimento do campo e adicionado nova tarefa,
// o campo é limpo pronto para adiciona uma nova tarefa
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
  }
  
// Apagar as tarefas já existentes
  function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}
  
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
  }
  
  // Evento de clique na classe inputTarefa
  btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    // Mandando o texto para uma função criaTarefa
    criaTarefa(inputTarefa.value);
  });
  
  document.addEventListener('click', function(e) {
    const el = e.target;
  
    if (el.classList.contains('apagar')) {
      el.parentElement.remove();
      salvarTarefas();
    }
});
  
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
  
    for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      listaDeTarefas.push(tarefaTexto);
    }
  
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
  }
  
  function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
  
    for(let tarefa of listaDeTarefas) {
      criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas()
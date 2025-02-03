let listaDeNomesSorteados = [];
let amigos = [];
let quantidadeDeNomes = (amigos.length)

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo ==='') {
        alert('Por favor, insira um nome');
        return;
    }
    amigos.push(nomeAmigo);
    atualizarLista();
    inputAmigo.value = '';
    inputAmigo.focus(); 
}

function atualizarLista() {
    let listaAmigoUl = document.getElementById('listaAmigos');
    listaAmigoUl.innerHTML = '';

    amigos.forEach(amigo => {
        let li =document.createElement('li');
        li.textContent = amigo;
        listaAmigoUl.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há amigos para sortear. Insira nomes antes de sortear.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let quantidadeDeNomes = listaDeNomesSorteados.length;

    if (quantidadeDeNomes == amigos.length) {
        listaDeNomesSorteados = [] && alert('Todos os nomes já foram sorteados');
        return;
    }
    let amigoSorteado = amigos[indiceAleatorio];
    let resultadoUl = document.getElementById('resultado');
    resultadoUl.innerHTML = `<li>${amigoSorteado}<li>`;

    if (listaDeNomesSorteados.includes(indiceAleatorio)) {
        return sortearAmigo();
    } else {
        listaDeNomesSorteados.push(indiceAleatorio);
        console.log(listaDeNomesSorteados);
        return indiceAleatorio;
    }   
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('button-add').addEventListener('click', adicionarAmigo)
    document.getElementById('button-draw').addEventListener('click', sortearAmigo)
});

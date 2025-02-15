//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos =[];


//Funcionalidade para agregar um amigo
function adicionarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nomeDoAmigo = inputAmigo

    //validar se o campo não está vazio 
    if(nome == ""){
        alert("Por favo, insira um nome");
        return;
    }

    //validação que o nome não esta dublicado
    if(amigos.includes(nomeDoAmigo)){
        alert(`O nome${nomeDoAmigo} ja esta na lista`);
        return;
    }

    //Adicionar nome ao array de amigos
    amigos.push(nomeDoAmigo);

    //Limpar o campo de entrada
    inputAmigo.ariaValu = "";

    //Atualizar a lista no HTML
    atualizarLista(); 

}

//função para atulizar a lista de amigos da interface 
function atualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    //Limpar o conteúdo atual da lista 
    listaAmigos.innerHTML = ""; //Elimina qualquer conteúdo anterior da lista

    //percorrer a matriz com um loop for
    for(let i = 0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Funcionalidade para selecionar um amigo aleatorio
function sortearAmigo(){
    //validar se tem um amigo disponivel
    if(amigos.length == 0){ //verifica se o vetor “amigos” está vazio
        alert("Não a amigos disponiveis para sortear. Adicione pelo o menos um");
        return;
    }

    //gerar um indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio]; // usar o indice aleatorio para pegar um nome no array

    //Mostrar o resultado no HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
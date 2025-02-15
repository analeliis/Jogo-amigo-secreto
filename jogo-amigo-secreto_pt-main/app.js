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
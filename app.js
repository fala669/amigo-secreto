// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if(nombre.trim() == ''){
        alert('Por favor agregue un amigo secreto para continuar');
    } else{
        Amigos.push(nombre);
        document.querySelector('#amigo').value="";
        mostrarLista();
       
    }

    console.log(nombre);

}

function mostrarLista(){
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = "";
    for(let index=0; index < Amigos.length; index++){
        const element = Amigos[index];
        let listaHTML = document.createElement('li');
        listaHTML.textContent = element;
        listaAmigos.appendChild(listaHTML);
        console.log(listaHTML);
    }
}






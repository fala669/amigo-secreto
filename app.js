// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if(nombre.trim() == ''){
        alert('Por favor agregue un amigo secreto para continuar')
        return;
    }

    amigos.push(nombre);
    console.log(amigos);
    document.getElementById('amigo').value='';

    mostrarAmigoEnLista();
}


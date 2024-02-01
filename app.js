let numeroSecreto = 0;//Como se declara la variable aquí, ya no es necesario, crearla en la función
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoelemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoelemento('p',`Acertaste el Número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoelemento('p','El número secreto es menor');
        }else{
            asignarTextoelemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}



function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoelemento('p', 'Ya se sortearon todos los números posibles');
    }else{
        //Si el numero generado esta incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoelemento('h1', 'Juego del Número Secreto');
    asignarTextoelemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego(){
    //Limpiar la caja 
    limpiarCaja();

    //Indicar intervalo de numeros 
    //Generar el número aleatorio 
    //Inicializar el número de intentos 
    condicionesIniciales()

    //Deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    
}

condicionesIniciales();

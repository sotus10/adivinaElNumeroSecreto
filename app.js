//Variables
let numeroMaximoPosible = 20;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez'
let maximoIntentos = 3;

console.log(numeroSecreto)
/*
El while significa mientras, por lo cual entre las llaves se repetira 
hasta que encuentre el numero secreto
*/
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));
    /*
    Para almecenar en consola se usa el log
    */
    console.log(numeroUsuario);
    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo resolviste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    //No acertamos
    } else {
        //No acerto porque es mayor
        
        if (numeroUsuario > numeroSecreto) {
            alert('El numero es menor');
        } else {
            alert('El numero es mayor');
        }
     }
     //Iniciamos el contador cuando se ejecuta el else
     //intentos = intentos + 1;
     //intentos += 1;
     intentos ++;
    //palabraVeces = 'veces';
    if(intentos > maximoIntentos) {
        alert(`Llegaste al numero de ${maximoIntentos} intentos`)
        break;
    }
}

// Cuando se llega al espacio hay que calcular la distancia entre el cohete y la tierra

import { cuentaRegresiva } from './despegue.js';

let distanciaCoheteEnElEspacio = 1000;
let distanciaTierra = 0;
let modeloCohete = ['Falcon 9', 'Falcon Heavy', 'Falcon 1', 'Starship', 'Starship Heavy'];

if (cohete === 0) {
    distanciaTierra = 100 - cuentaRegresiva;
    distanciaCoheteEnElEspacio = distanciaCoheteEnElEspacio - distanciaTierra;
    console.log('El cohete está a ' + distanciaCoheteEnElEspacio + ' km de la tierra');
} else (cohete !== 0);
    console.log('El cohete no ha llegado al espacio');

// Cuando el cohete llegue al espacio entonces nuestro piloto dirá algo
class AyudanteDePiloto {
    constructor (nombre, apellido, edad, nacionalidad, cargo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        this.cargo = cargo;
    }
    decirAlgo() {
        console.log('¡El cohete está en el espacio!');
        console.log ('Chequeando todos los sistemas del cohete' + modeloCohete.indexOf(1));
    }
}
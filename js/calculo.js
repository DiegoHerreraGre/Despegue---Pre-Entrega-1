class Cohete {

    tipo;
    nombre;
    potenciaMaxima;
    potenciaActual;
    propulsores;
    destino;
    velocidadActual;
    velocidadMaxima;
    aceleracion;
    distanciaRecorrida;
    distanciaTotal;

    constructor (tipo, nombre, potenciaMaxima, propulsores, destino, velocidadMaxima, distanciaTotal) {
        
        this.tipo = tipo;
        this.nombre = nombre;
        this.potenciaMaxima = potenciaMaxima;
        this.propulsores = propulsores;
        this.destino = destino;
        this.velocidadActual = 0;
        this.velocidadMaxima = velocidadMaxima;
        this.aceleracion = 0;
        this.distanciaRecorrida = 0;
        this.distanciaTotal = distanciaTotal;
    }
}

// Construimos diferentes tipos de cohete

let cohete1 = new Cohete("Sonda", "32WESSDS", 15, "Petroleros", "Sol", 50, 100000);

let cohete2 = new Cohete("Satélite", "LDSFJA32", 30, "Petroleros", "Tierra", 50, 100000);

let cohete3 = new Cohete("Sonda", "32WESSD231", 40, "Petroleros", "Marte", 50, 100000);

// Al llegar al espacio usuario elige el cohete que quiere pilotar

let coheteElegido = prompt("Elige el cohete que quieres pilotar: 1, 2 o 3");

// Creamos un array con los cohetes

let cohetes = [cohete1, cohete2, cohete3];

// Creamos un array con los propulsores de cada cohete

let propulsoresCohete1 = [10, 30, 80];

let propulsoresCohete2 = [30, 40, 50, 50, 30, 10];

let propulsoresCohete3 = [10, 30, 80];

let propulsoresCohetes = [propulsoresCohete1, propulsoresCohete2, propulsoresCohete3];

// Creamos un array con las potencias de cada propulsor

let potenciaPropulsoresCohete1 = [10, 30, 80];

let potenciaPropulsoresCohete2 = [30, 40, 50, 50, 30, 10];

let potenciaPropulsoresCohete3 = [10, 30, 80];

let potenciaPropulsoresCohetes = [potenciaPropulsoresCohete1, potenciaPropulsoresCohete2, potenciaPropulsoresCohete3];

// Creamos un array con las velocidades de cada cohete

let velocidadCohete1 = [0, 0, 0];

let velocidadCohete2 = [0, 0, 0, 0, 0, 0];

let velocidadCohete3 = [0, 0, 0];

let velocidadCohetes = [velocidadCohete1, velocidadCohete2, velocidadCohete3];

// Creamos un array con las distancias recorridas de cada cohete

let distanciaRecorridaCohete1 = [0, 0, 0];

let distanciaRecorridaCohete2 = [0, 0, 0, 0, 0, 0];

let distanciaRecorridaCohete3 = [0, 0, 0];

let distanciaRecorridaCohetes = [distanciaRecorridaCohete1, distanciaRecorridaCohete2, distanciaRecorridaCohete3];

// Creamos un array con las aceleraciones de cada cohete

let aceleracionCohete1 = [0, 0, 0];

let aceleracionCohete2 = [0, 0, 0, 0, 0, 0];

let aceleracionCohete3 = [0, 0, 0];

let aceleracionCohetes = [aceleracionCohete1, aceleracionCohete2, aceleracionCohete3];

// Creamos un array con las distancias totales de cada cohete

let distanciaTotalCohete1 = [0, 0, 0];

let distanciaTotalCohete2 = [0, 0, 0, 0, 0, 0];

let distanciaTotalCohete3 = [0, 0, 0];

let distanciaTotalCohetes = [distanciaTotalCohete1, distanciaTotalCohete2, distanciaTotalCohete3];

// Creamos un array con las velocidades máximas de cada cohete

let velocidadMaximaCohete1 = [0, 0, 0];

let velocidadMaximaCohete2 = [0, 0, 0, 0, 0, 0];

let velocidadMaximaCohete3 = [0, 0, 0];

let velocidadMaximaCohetes = [velocidadMaximaCohete1, velocidadMaximaCohete2, velocidadMaximaCohete3];

// Creamos un array con las potencias máximas de cada cohete

let potenciaMaximaCohete1 = [0, 0, 0];

let potenciaMaximaCohete2 = [0, 0, 0, 0, 0, 0];

let potenciaMaximaCohete3 = [0, 0, 0];

let potenciaMaximaCohetes = [potenciaMaximaCohete1, potenciaMaximaCohete2, potenciaMaximaCohete3];

// Creamos un array con las potencias actuales de cada cohete

let potenciaActualCohete1 = [0, 0, 0];

let potenciaActualCohete2 = [0, 0, 0, 0, 0, 0];

let potenciaActualCohete3 = [0, 0, 0];

let potenciaActualCohetes = [potenciaActualCohete1, potenciaActualCohete2, potenciaActualCohete3];

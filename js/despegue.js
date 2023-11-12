    alert('¡Bienvenido al lanzamiento de la nave espacial!');

    alert('¡Iniciemos la cuenta regresiva!');

    // Además, se pone una función básica para que se pueda iniciar la cuenta regresiva siempre que se quiera

export function lanzamientoCohete() {

    function lanzamientoCohete() {

        let iniciarCuentaRegresiva = prompt('¿Desea iniciar la cuenta regresiva?');

        if (iniciarCuentaRegresiva === 'si' || iniciarCuentaRegresiva === 'Sí' || iniciarCuentaRegresiva ===  'SI' || iniciarCuentaRegresiva === 'sí' || iniciarCuentaRegresiva === 'SI' || iniciarCuentaRegresiva === 'Si') {

            console.log('¡Iniciando cuenta regresiva!');

            // Variables para crear una cuenta regresiva 

            let cuentaRegresiva = 10;

            while (cuentaRegresiva > 0) {

                console.log('Despegue en: ' + cuentaRegresiva);

                cuentaRegresiva--;

                if (cuentaRegresiva === 5) {

                    console.log('¡Alerta de despegue!');

                }
                if (cuentaRegresiva === 0) {

                    console.log('¡Despegue!');

                    break;
                }

            }

            // Una vez hay despegue entonces nuestro cohete se mueve hacia arriba

            let cohete = 100;

            while (cohete > 0) {

                console.log('Cohete cerca del punto inicial [ ' + cohete + ' ]');

                cohete--;

                if (cohete === 75) {

                    console.log('¡Cohete en movimiento!');

                }

                if (cohete === 60) {

                    console.log('¡Cohete con turbulencias!');

                }

                if (cohete === 50) {

                    console.log('¡Estamos viendo la tierra redonda 🥵!');

                }

                if (cohete === 25) {

                    console.log('¡Cohete en la estratosfera! 🥶');
                }

                if (cohete === 0) {

                    console.log('¡Cohete en el espacio!');

                    break;

                }

            }

            // Cuando nuestro cohete llegue al espacio entonces nuestro piloto dirá algo

            const piloto = 'Diego'

            if (cohete === 0) {

                console.log('¡Hola ' + piloto + '!' + ' ¡Bienvenido al espacio!');

                alert('¡Hola ' + piloto + '!' + ' El viaje ha terminado 😇');

            }

            return true;

        } else {

            // Si el usuario no inicia la cuenta regresiva entonces no se ejecuta el programa

            if (iniciarCuentaRegresiva !== 'si' && iniciarCuentaRegresiva !== 'Sí' && iniciarCuentaRegresiva !== 'SI' && iniciarCuentaRegresiva !== 'sí' && iniciarCuentaRegresiva !== 'SI' && iniciarCuentaRegresiva !== 'Si') {

                console.log('¡Hasta luego!');

                alert('Fallaste en iniciar la cuenta regresiva');
            }

            return false;

        }

    }

}

debugger;
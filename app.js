// options del yargs es como un command, pero apunta a la raíz de la app, no a un comando en particular
const argv = require('yargs').options({
    Direccion: {
        alias: 'd',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getClimaCiudad(argv.Direccion)
//     .then(console.log);

// clima.getClima(39, 73)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getClimaCiudad(direccion);
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lon);

        return `El clima de ${direccion} es de ${ temp } grados celcius`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)
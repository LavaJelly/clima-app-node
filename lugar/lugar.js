const axios = require('axios');


// Se usa una constante por que es más liviana y la hacemos async ya que estamos trabajando con promesas.
const getClimaCiudad = async(dir) => {

    // Hay que escapar el comando para que sea un url seguro.
    const encodedUrl = encodeURI(dir);

    // Al api key de la API de openweather.com
    const opAPI = '37e3a2e220eaed92237a15d42d01c9d3';

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=${opAPI}`,
        // timeout: 1000,
        headers: {
            'q': `${encodedUrl}`,
            'appid': `${opAPI}`
        }

    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const lat = resp.data.coord.lat;
    const lon = resp.data.coord.lon;

    return {
        lat,
        lon
    }
}

module.exports = {
    getClimaCiudad
}
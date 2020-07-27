const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=37e3a2e220eaed92237a15d42d01c9d3&units=metric`)

    return resp.data.main.temp;

}


module.exports = {
    getClima
}
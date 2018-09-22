const request = require('request')

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/0208bc5dbd29c23df09c64882fc5bdac/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else {
            callback('Unable to fetch weather')
        }  
    });
}

module.exports = {
    getWeather
}

const request = require('request')

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address)

    request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBKDshOx98TyQeDC7C2Wj2UzlApnbLgynw&address=${encodedAddress}`,
    json: true
    }, (error, response, body) => {
    // callback after fetching result process result
    //console.log(JSON.stringify(response, undefined, 2))
    if(error) {
        callback('Unable to connect to google servers')
    } else if(body.status === 'ZERO_RESULTS') {
        console.log('Unable to find that address')
    } else if(body.status === 'OK') {
        callback(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        })
    }
})
}

module.exports = {
    geocodeAddress
}
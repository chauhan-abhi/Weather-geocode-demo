const request = require('request')

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBKDshOx98TyQeDC7C2Wj2UzlApnbLgynw&address=121Homes%20Sector%20121%20Noida',
    json: true
}, (error, response, body) => {
    // callback after fetching result process result
    //console.log(JSON.stringify(response, undefined, 2)) 
    console.log(`Address: ${body.results[0].formatted_address}`)
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
})
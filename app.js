const yargs = require('yargs')

const geocode = require('./geocode/geocode.js')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: `address`,
            describe: `Address to fetch weather for`,
            string: true            // parse address as string only
        }
    })
    .help()
    .alias(`help`, 'h')
    .argv

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage)
    } else {
        console.log(JSON.stringify(results, undefined, 2))
    }
})

// var encodedAddress = encodeURIComponent(argv.address)

// request({
//     url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBKDshOx98TyQeDC7C2Wj2UzlApnbLgynw&address=${encodedAddress}`,
//     json: true
// }, (error, response, body) => {
//     // callback after fetching result process result
//     //console.log(JSON.stringify(response, undefined, 2))
//     if(error) {
//         console.log('Unable to connect to google servers')
//     } else if(body.status === 'ZERO_RESULTS') {
//         console.log('Unable to find that address')
//     } else if(body.status === 'OK') {
//     console.log(`Address: ${body.results[0].formatted_address}`)
//     console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
//     console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
//     }
// })